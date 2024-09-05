import { IsOptional, IsString } from 'class-validator';

import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Type(() => String)
  id?: string;
}