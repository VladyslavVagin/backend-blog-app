import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Model } from 'mongoose';
import { Post } from '../post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,
    /**
     * Inject postModel
     */
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  public async createPost(createPostDto: CreatePostDto) {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }

  public async findAll() {
    return await this.postModel
      .find()
      .populate('tags')
      .populate('author')
      .exec();
  }
}
