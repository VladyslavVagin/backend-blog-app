import { CreateTagDto } from './../dtos/create-tag.dto';
import { Injectable } from '@nestjs/common';
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

  public async createTag(createTagDto: CreateTagDto) {
    const newTag = new this.tagsModel(createTagDto);
    return await newTag.save();
  }
}