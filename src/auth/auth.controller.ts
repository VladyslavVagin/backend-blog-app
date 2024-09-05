import { Body, Controller, HttpCode, Post, HttpStatus } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'User Sign In' })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed in',
  })
  @ApiResponse({
    status: 408,
    description: 'Request Timeout',
  })
  @ApiBody({
    description: 'Body request to sign in',
    type: SignInDto,
  })
  public async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @Post('refresh-tokens')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get refresh tokens' })
  @ApiResponse({
    status: 200,
    description: 'Refresh tokens successfully',
  })
  @ApiBody({
    description: 'Body request to refresh tokens',
    type: RefreshTokenDto,
  })
  public async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.authService.refreshTokens(refreshTokenDto);
  }
}
