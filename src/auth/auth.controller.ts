import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        /** Inject authService */
        private readonly authService: AuthService,
    ) {}
}
