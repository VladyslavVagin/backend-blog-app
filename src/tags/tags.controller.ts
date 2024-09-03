import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(
    /** Inject tagsService */
    private readonly tagsService: TagsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({ status: 201, description: 'Tag created successfully' })
  public createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.createTag(createTagDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tags' })
  @ApiResponse({ status: 200, description: 'All tags fetched successfully' })
  public findAll(tags?: string[]) {
    return this.tagsService.findAll(tags);
  }
}
