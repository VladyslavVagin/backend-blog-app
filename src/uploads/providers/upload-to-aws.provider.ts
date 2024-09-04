import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadToAwsProvider {
  constructor(
    /** Inject configService */
    private readonly configService: ConfigService,
  ) {}

  public async fileUpload(file: Express.Multer.File) {
    const s3 = new S3();

    try {
      const uploadResults = await s3
        .upload({
          Bucket: this.configService.get('appConfig.awsBucketName'),
          Body: file.buffer,
          Key: this.generateFileName(file),
          ContentType: file.mimetype,
        })
        .promise();

      return uploadResults.Key;
    } catch (error) {
        throw new RequestTimeoutException(error);
    }
  }

  // Method for generate ubique key
  private generateFileName(file: Express.Multer.File) {
    // Extract file name from file itself
    let name = file.originalname.split('.')[0];

    // Remove white spaces from file name
    name.replace(/\s/g, '').trim();

    // Extract extension from file name
    let extension = path.extname(file.originalname);
    // Generate timestamp
    let timestamp = new Date().getTime().toString().trim();
    // Return file uuid
    return `${name}-${timestamp}-${uuidv4()}${extension}`;
  }
}