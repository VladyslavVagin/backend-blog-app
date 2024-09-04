import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Upload } from '../upload.schema';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { UploadFile } from '../interfaces/upload-file.interface';
import { fileTypes } from '../enums/file-types.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UploadsService {
  constructor(
    /** Inject uploadsRepository */
    @InjectModel(Upload.name)
    private readonly uploadsModel: Model<Upload>,

    /** Inject uploadToAwsProvider */
    private readonly uploadToAwsProvider: UploadToAwsProvider,

    /** Inject configService */
    private readonly configService: ConfigService,
  ) {}

  public async uploadFile(file: Express.Multer.File) {
    // throw error if unsupported MIME type
    if (
      !['image/gif', 'image/jpeg', 'image/jpg', 'image/png'].includes(
        file.mimetype,
      )
    ) {
      throw new BadRequestException('Unsupported file type');
    }

    try {
      // Upload file to AWS cloud S3 bucket
      const name = await this.uploadToAwsProvider.fileUpload(file);

      // Genarate a signed URL for the uploaded file to database
      const uploadFile: UploadFile = {
        name,
        path: `https://${this.configService.get('appConfig.awsCloudfrontUrl')}/${name}`,
        type: fileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };

      const upload = new this.uploadsModel(uploadFile);
      return await upload.save();
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
