import { Body, Controller, HttpCode, Post, HttpStatus } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dtos/signin.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
    constructor(
        /** Inject authService */
        private readonly authService: AuthService,
    ) {}

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    public async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto);
    }
}
