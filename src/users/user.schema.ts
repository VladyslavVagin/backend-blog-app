import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

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
    isRequired: false,
  })
  @Exclude()
  password?: string;

  @Prop({
    type: String,
    isRequired: false,
  })
  googleId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);