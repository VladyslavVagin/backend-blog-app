import {
  ConflictException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';
import { User } from '../user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
import profileConfig from '../config/profile.config';

@Injectable()
export class UsersService {
  constructor(
    /** Inject authService */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    /** Inject userModel */
    @InjectModel(User.name)
    private readonly usersModel: Model<User>,

    /** Inject ConfigService */
    private readonly configService: ConfigService,

    /** Inject profileConfig */
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
  ) {}

  /** Find user by email */
  public async findOneByEmail(email: string): Promise<User | null> {
    return this.usersModel.findOne({ email });
  }

  /** Create a new user */
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const newUser = new this.usersModel(createUserDto);
    return await newUser.save();
  }

  /** Find user by id */
  public findOneById(_id: string) {
    return this.usersModel.findById(_id);
  }

  /** Get all users from database */
  public async getUsers(
    getUsersParamDto: GetUsersParamDto,
    limit: number = 10,
    page: number = 1,
  ): Promise<User[] | []> {
    // test the profileConfig
    console.log(this.profileConfiguration);

    return await this.usersModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }
}
