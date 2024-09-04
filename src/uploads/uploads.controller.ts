import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ApiHeaders, ApiOperation } from '@nestjs/swagger';
  import { Express } from 'express';
  import { UploadsService } from './providers/providers.service';
  
  @Controller('uploads')
  export class UploadsController {
    constructor(
      /** Inject uploadsService */
      private readonly uploadsService: UploadsService,
    ) {}
  
    @UseInterceptors(FileInterceptor('file'))
    @ApiHeaders([
      { name: 'Content-Type', description: 'multipart/form-data' },
      { name: 'Authorization', description: 'Bearer token' },
    ])
    @ApiOperation({summary: 'Upload a new image file to the server'})
    @Post('file')
    public uploadFile(@UploadedFile() file: Express.Multer.File) {
      return this.uploadsService.uploadFile(file);
    }
  }