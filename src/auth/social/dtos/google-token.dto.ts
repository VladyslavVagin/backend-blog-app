import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GoogleTokenDto {
  @ApiProperty({
    description:
      'Google token to authenticate. This token is obtained from the Google Sign-In API',
    example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzZjMzZjI',
  })
  @IsNotEmpty()
  token: string;
}
