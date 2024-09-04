import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './providers/providers.service';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Upload, UploadSchema } from './upload.schema';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, UploadToAwsProvider],
  imports: [
    MongooseModule.forFeature([
      {
        name: Upload.name,
        schema: UploadSchema,
      },
    ]),
  ],
})
export class UploadsModule {}
