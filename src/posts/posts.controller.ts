import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        /** Inject postsService */
        private readonly postsService: PostsService,
    ) {}

    /** Get all posts or user's posts */
    @Get('/:userId?')
    public getPosts(@Param('userId') userId: string) {
      return this.postsService.findAll(userId);
    }
}
