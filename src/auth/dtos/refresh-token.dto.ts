import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'The refresh token of the user',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjIyNzE4MzI2LCJleHAiOjE2MjI3MTgzMzZ9.6Z5KvQ8Y8r6v5Vp1v1VHv6Xx2bXlV9Z',
  })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
