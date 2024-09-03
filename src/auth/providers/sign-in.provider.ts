import {
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { SignInDto } from '../dtos/signin.dto';
import { UsersService } from 'src/users/providers/users.service';
import { HashingProvider } from './hashing.provider';
import { GenerateTokensProvider } from './generate-tokens.provider';

@Injectable()
export class SignInProvider {
  constructor(
    /** Inject usersService */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    /** Inject hashingProvider */
    private readonly hashingProvider: HashingProvider,

    /** Inject generateTokensProvider */
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    let user = await this.usersService.findOneByEmail(signInDto.email);
    let isEqual: boolean = false;
    try {
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Could not compare password',
      });
    }

    return await this.generateTokensProvider.generateTokens(user);
  }
}
