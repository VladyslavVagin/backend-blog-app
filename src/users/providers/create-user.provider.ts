import {
  Inject,
  Injectable,
  forwardRef,
  RequestTimeoutException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user.schema';
import { Model } from 'mongoose';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserProvider {
  constructor(
    /** Inject usersModel */
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    /** Inject hashingProvider */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;

    try {
      existingUser = await this.userModel.findOne({
        email: createUserDto.email,
      });
    } catch (error) {
      throw new RequestTimeoutException('Error fetching user');
    }

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    let newUser = new this.userModel({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
    });

    try {
      newUser = await newUser.save();
    } catch (error) {
      throw new RequestTimeoutException(error);
    }

    // Convert the Mongoose document into a plain JavaScript object
    const userObject = newUser.toObject();

    // Convert _id to string
    userObject._id = userObject._id.toString();

    // Delete the password property
    delete userObject.password;

    return userObject;
  }
}
