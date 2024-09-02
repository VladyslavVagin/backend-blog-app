import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    /** Inject userModel */
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async findOneByEmail(email: string) {
    let user: User | undefined = undefined;
    try {
      user = await this.userModel.findOne({ email });
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Could not fetch user by email',
      });
    }

    return user;
  }
}
