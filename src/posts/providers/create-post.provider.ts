import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from '../post.schema';
import { PostsService } from './posts.service';
import { ActiveUserData } from 'src/auth/interfaces/active-user.interface';
import { UsersService } from 'src/users/providers/users.service';
import { TagsService } from 'src/tags/providers/tags.service';

@Injectable()
export class CreatePostProvider {
  constructor(
    /**
     * Inject postModel
     */
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,

    /** Inject usersService */
    private readonly usersService: UsersService,

    /** Inject tagsService */
    private readonly tagsService: TagsService,

    /** Inject postsService */
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
  ) {}
  
  /** Create a new post */
  public async createPost(createPostDto: CreatePostDto, user: ActiveUserData) {
    let author = undefined;
    let tags = undefined;

    try {
      author = await this.usersService.findOneById(user.sub);
      tags = await this.tagsService.findAll(createPostDto.tags);
    } catch (error) {
      throw new ConflictException(error);
    }

    if (createPostDto.tags.length !== tags.length) {
      throw new BadRequestException('Please check your tag Ids');
    }

    const existingPost = await this.postsService.findOneBySlug(createPostDto.slug);
    if (existingPost) {
      throw new BadRequestException('Post with this slug already exists');
    }

    const newPost = new this.postModel({
        ...createPostDto,
        author,
        tags,
      });
  
      try {
        return await newPost.save();
      } catch (error) {
        throw new ConflictException(error, {
          description: 'Ensure post slug is unique and not a duplicate',
        });
      }
  }
}
