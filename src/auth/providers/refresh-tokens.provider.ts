import { Inject, Injectable, UnauthorizedException, forwardRef } from '@nestjs/common';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { GenerateTokensProvider } from './generate-tokens.provider';
import { UsersService } from 'src/users/providers/users.service';
import { ActiveUserData } from '../interfaces/active-user.interface';

@Injectable()
export class RefreshTokensProvider {
  constructor(
    /** Inject jwtService */
    private readonly jwtService: JwtService,

    /** Inject jwtConfiguration */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    /** Inject generateTokensProvider */
    private readonly generateTokensProvider: GenerateTokensProvider,

    /** Inject usersService */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    try {
      const { sub } = await this.jwtService.verifyAsync<Pick<ActiveUserData, 'sub'>>(
        refreshTokenDto.refreshToken,
        {
          secret: this.jwtConfiguration.secret,
          audience: this.jwtConfiguration.audience,
          issuer: this.jwtConfiguration.issuer,
        },
      );
      const user = await this.usersService.findOneById(sub);
      return await this.generateTokensProvider.generateTokens(user);
    } catch (error) {
        throw new UnauthorizedException(error);
    }
  }
}
