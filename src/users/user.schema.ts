import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class User extends Document {
  // Note: id is not needed because _id is added by default by MongoDb
  @Prop({
    type: String,
    isRequired: true,
  })
  firstName: string;

  @Prop({
    type: String,
    isRequired: false,
  })
  lastName?: string;

  @Prop({
    type: String,
    isRequired: true,
  })
  email: string;

  @Prop({
    type: String,
    isRequired: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);