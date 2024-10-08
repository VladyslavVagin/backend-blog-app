import { Module, forwardRef } from '@nestjs/common';
import { User, UserSchema } from './user.schema';

import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { ConfigModule } from '@nestjs/config';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './providers/find-one-by-google-id.provider';
import { CreateGoogleUserProvider } from './providers/create-google-user.provider';
import { CreateUserProvider } from './providers/create-user.provider';
import profileConfig from './config/profile.config';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    FindOneUserByEmailProvider,
    FindOneByGoogleIdProvider,
    CreateGoogleUserProvider,
    CreateUserProvider,
  ],
  exports: [UsersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    forwardRef(() => AuthModule),
    ConfigModule.forFeature(profileConfig)
  ],
})
export class UsersModule {}
