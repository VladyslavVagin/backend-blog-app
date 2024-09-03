import { Body, Controller, HttpCode, Post, HttpStatus } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dtos/signin.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(
    /** Inject authService */
    private readonly authService: AuthService,
  ) {}

  @Post('sign-in')
  @Auth(AuthType.None)
  @HttpCode(HttpStatus.OK)
  public async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @Post('refresh-tokens')
  @Auth(AuthType.None)
  @HttpCode(HttpStatus.OK)
  public async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.authService.refreshTokens(refreshTokenDto);
  }
}
