import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
  forwardRef,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';
import { User } from '../user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { GoogleUser } from '../interfaces/google-user.interface';
import { CreateUserProvider } from './create-user.provider';

@Injectable()
export class UsersService {
  constructor(
    /** Inject userModel */
    @InjectModel(User.name)
    private readonly usersModel: Model<User>,

    /** Inject findOneUserByEmailProvider */
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,

    /** Inject findOneByGoogleIdProvider */
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,

    /** Inject createGoogleUserProvider */
    private readonly createGoogleUserProvider: CreateGoogleUserProvider,

    /** Inject createUserProvider */
    private readonly createUserProvider: CreateUserProvider,
  ) {}

  /** Find user by email */
  public async findOneByEmail(email: string) {
    return await this.findOneUserByEmailProvider.findOneByEmail(email);
  }

   /** Create a new user */
   public async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.createUserProvider.createUser(createUserDto);
  }

  /** Find user by id */
  public findOneById(_id: string) {
    const user = this.usersModel.findById(_id);
    if(!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  /** Get all users from database */
  public async getUsers(
    getUsersParamDto: GetUsersParamDto,
    limit: number = 10,
    page: number = 1,
  ): Promise<User[] | []> {

    return await this.usersModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  public async findOneByGoogleId(googleId: string) {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }

  public async createGoogleUser(googleUser: GoogleUser) {
    return await this.createGoogleUserProvider.createGoogleUser(googleUser);
  }
}
