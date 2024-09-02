import { CreatePostDto } from './create-post.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  id: string;
}