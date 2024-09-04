import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user.schema';
import { Model } from 'mongoose';
import { GoogleUser } from '../interfaces/google-user.interface';

@Injectable()
export class CreateGoogleUserProvider {
  constructor(
    /** Inject usersModel */
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async createGoogleUser(googleUser: GoogleUser) {
    try {
      const user = new this.userModel(googleUser);
      return await user.save();
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
