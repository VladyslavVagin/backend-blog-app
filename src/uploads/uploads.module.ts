import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { ProvidersService } from './providers/providers.service';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';

@Module({
  controllers: [UploadsController],
  providers: [ProvidersService, UploadToAwsProvider]
})
export class UploadsModule {}
