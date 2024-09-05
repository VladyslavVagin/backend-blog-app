import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';

@Controller('tags')
@ApiTags('Tags')
export class TagsController {
  constructor(
    /** Inject tagsService */
    private readonly tagsService: TagsService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({ status: 201, description: 'Tag created successfully' })
  @ApiBody({
    description: 'Body request to create a new tag',
    type: CreateTagDto
   })
  public createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.createTag(createTagDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all tags' })
  @ApiResponse({ status: 200, description: 'All tags fetched successfully' })
  @ApiBody({
    description: 'Query tags by tag ids',
    type: [String],
  })
  public findAll(tags?: string[]) {
    return this.tagsService.findAll(tags);
  }
}
