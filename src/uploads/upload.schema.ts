import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { fileTypes } from './enums/file-types.enum';

@Schema({ timestamps: true })
export class Upload extends Document {

  @Prop({
    type: String,
    maxlength: 1024,
    isRequired: true,
  })
  name: string;

  @Prop({
    type: String,
    maxlength: 1024,
    isRequired: true,
  })
  path: string;

  @Prop({
    type: String,
    enum: fileTypes,
    default: fileTypes.IMAGE,
    isRequired: true,
  })
  type: string;

  @Prop({
    type: String,
    maxlength: 128,
    isRequired: true,
  })
  mime: string;

  @Prop({
    type: Number,
    maxlength: 1024,
    isRequired: true,
  })
  size: number;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);