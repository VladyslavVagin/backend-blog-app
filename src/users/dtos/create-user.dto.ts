import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {
    @ApiProperty({
      description: 'The first name of the user',
      example: 'John',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName: string;
  
    @ApiProperty({
      description: 'The last name of the user',
      example: 'Doe',
    })
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lastName?: string;
  
    @ApiProperty({
      description: 'The email of the user',
      example: 'test@email.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty({
      description: 'The password of the user',
      example: 'Password123#',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
  }