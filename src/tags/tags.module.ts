import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './providers/tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from './tag.schema';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Tag.name,
        schema: TagSchema,
      },
    ]),
  ],
})
export class TagsModule {}
