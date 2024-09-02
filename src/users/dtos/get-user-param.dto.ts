import { IsOptional, IsString } from 'class-validator';

import { Type } from 'class-transformer';

export class GetUsersParamDto {
  @IsOptional()
  @IsString()
  @Type(() => String)
  id?: string;
}