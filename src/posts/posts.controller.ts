import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsDto } from './dtos/get-posts.dto';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { ActiveUserData } from 'src/auth/interfaces/active-user.interface';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /*
     *  Injecting Posts Service
     */
    private readonly postsService: PostsService,
  ) {}

  /*
   * GET localhost:3000/posts/:userId
   */
  @Get('/:userId?')
  @ApiOperation({
    summary: 'Gets all posts for a user.',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Posts fetched successfully based on the query',
  })
  @ApiParam({
    name: 'userId',
    description: 'The id of the user whose posts you want to fetch',
    required: false,
    example: '60f1b3b3b3b3b3b3b3b3b3b3',
  })
  public getPosts(
    @Param('userId') userId: string,
    @Query() postQuery: GetPostsDto,
  ) {
    return this.postsService.findAll(postQuery, userId);
  }

  @ApiOperation({
    summary: 'Creates a new post for the blog.',
  })
  @ApiResponse({
    status: 201,
    description:
      'You get a success 201 response if the post is created successfully',
  })
  @ApiBody({
    description: 'Body for creating a post',
    type: CreatePostDto,
  })
  @Post()
  @ApiBearerAuth()
  public createPost(
    @Body() createPostDto: CreatePostDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.postsService.createPost(createPostDto, user);
  }

  @ApiOperation({
    summary: 'Updates an existing blog post in the database.',
  })
  @ApiResponse({
    status: 200,
    description:
      'You get a success 200 response if the post is updated successfully',
  })
  @ApiBody({
    description: 'Body for updating a post',
    type: PatchPostDto,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the post you want to update',
    required: true,
    example: '60f1b3b3b3b3b3b3b3b3b3',
  })
  @ApiBearerAuth()
  @Patch('/:id')
  public async updatePost(
    @Param('id') id: string,
    @Body() patchPostsDto: PatchPostDto,
  ) {
    patchPostsDto.id = id; // set the _id property of patchPostsDto to the id from the route parameters
    return await this.postsService.update(patchPostsDto);
  }
}
