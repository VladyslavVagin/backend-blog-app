import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user.schema';
import { Model } from 'mongoose';

@Injectable()
export class FindOneByGoogleIdProvider {
  constructor(
    /** Inject usersModel */
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async findOneByGoogleId(googleId: string) {
    return await this.userModel.findOne({ googleId });
  }
}
