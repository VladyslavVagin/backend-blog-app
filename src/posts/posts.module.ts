import { Post, PostSchema } from './post.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { PaginationModule } from 'src/common/pagination/pagination.module';
import { CreatePostProvider } from './providers/create-post.provider';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, CreatePostProvider],
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
    UsersModule,
    PaginationModule,
    TagsModule,
  ],
  exports: [PostsService],
})
export class PostsModule {}