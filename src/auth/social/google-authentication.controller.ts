import { Controller, Body, Post } from '@nestjs/common';
import { GoogleAuthenticationService } from './providers/google-authentication.service';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { Auth } from '../decorators/auth.decorator';
import { AuthType } from '../enums/auth-type.enum';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Auth(AuthType.None)
@ApiTags('Google Authentication')
@Controller('auth/google-authentication')
export class GoogleAuthenticationController {
  constructor(
    /** Inject googleAuthenticationService */
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Authenticate with Google' })
  @ApiBody({
    description:
      'Google token to authenticate. This token is obtained from the Google Sign-In API',
    type: GoogleTokenDto,
  })
  public authenticate(@Body() googleTokenDto: GoogleTokenDto) {
    return this.googleAuthenticationService.authenticate(googleTokenDto);
  }
}
