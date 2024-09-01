import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UsersService {
    constructor(
        /** Inject authService */
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
    ) {}

    /** Find all users */
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limt: number,
        page: number,
      ) {
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
    
        return [
          {
            firstName: 'John',
            email: 'john@doe.com',
          },
          {
            firstName: 'Alice',
            email: 'alice@doe.com',
          },
        ];
      }
    
      /** Find user by id */
      public findOneById(id: string) {
        return {
          id: 1234,
          firstName: 'Alice',
          email: 'alice@doe.com',
        };
      }
}
