import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
    constructor(
        /** Inject authService */
        private readonly authService: AuthService,
    ) {}
}
