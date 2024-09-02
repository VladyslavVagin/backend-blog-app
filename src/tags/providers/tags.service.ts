import { CreateTagDto } from './../dtos/create-tag.dto';
import { BadRequestException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Tag } from '../tag.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject tagsModel
     */
    @InjectModel(Tag.name)
    private readonly tagsModel: Model<Tag>,
  ) {}

   /** Create a new tag */
   public async createTag(createTagDto: CreateTagDto) {
    const existingTag = await this.tagsModel.findOne({ $or: [{ slug: createTagDto.slug }, { name: createTagDto.name }] });
    if (existingTag) {
      throw new BadRequestException('Tag with this slug or name already exists');
    }

    const newTag = new this.tagsModel(createTagDto);
    try {
      return await newTag.save();
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }

  /** Get all tags */
  public async findAll() {
    try {
      return await this.tagsModel.find().exec();
    } catch (error) {
      throw new RequestTimeoutException('Error fetching tags');
    }
  }
}