import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException, Body, Inject, forwardRef
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Model } from 'mongoose';
import { Post } from '../post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { GetPostsDto } from '../dtos/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { ActiveUserData } from 'src/auth/interfaces/active-user.interface';
import { TagsService } from 'src/tags/providers/tags.service';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Inject postModel
     */
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,

    /** Inject paginationProvider */
    private readonly paginationProvider: PaginationProvider,

    /** Inject createPostProvider */
    @Inject(forwardRef(() => CreatePostProvider))
    private readonly createPostProvider: CreatePostProvider,
  ) {}

  /** Find post by slug */
  public async findOneBySlug(slug: string): Promise<Post | null> {
    return this.postModel.findOne({ slug });
  }

  /** Create a new post */
  public async createPost(createPostDto: CreatePostDto, user: ActiveUserData) {
    return this.createPostProvider.createPost(createPostDto, user);
  }

/** Get all posts or all posts of a specific user */
public async findAll(postQuery?: GetPostsDto ,userId?: string): Promise<Paginated<Post>> {
  try {
    let query: any={};
    if (userId) {
      query = { author: userId }; // if userId is provided, find posts where the author's id is userId
    }
    return await this.paginationProvider.paginateQuery(postQuery, this.postModel, query);
  } catch (error) {
    throw new RequestTimeoutException('Error fetching posts');
  }
}

    /** Update an existing post */
    public async update(patchPostDto: PatchPostDto) {
      try {
        const post = await this.postModel.findById(patchPostDto.id);
        if (!post) {
          throw new NotFoundException('The post ID does not exist');
        }
  
        post.title = patchPostDto.title ?? post.title;
        post.content = patchPostDto.content ?? post.content;
        post.status = patchPostDto.status ?? post.status;
        post.postType = patchPostDto.postType ?? post.postType;
        post.slug = patchPostDto.slug ?? post.slug;
        post.featuredImageUrl = patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
        post.publishOn = patchPostDto.publishOn ?? post.publishOn;
  
        await post.save();
        return post;
      } catch (error) {
        throw new RequestTimeoutException('Unable to process your request at the moment please try later', {
          description: 'Error connecting to the database',
        });
      }
    }
}
