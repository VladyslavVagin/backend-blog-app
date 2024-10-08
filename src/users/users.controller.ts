import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { GetUsersParamDto } from './dtos/get-user-param.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiBearerAuth, ApiParam, ApiBody } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    /** Inject usersService */
    private readonly usersService: UsersService,
  ) {}

  @Get('/:id?')
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: 'The id of the user you want to fetch',
    required: false,
    example: '60f1b3b3b3b3b3b3b3b3b3b3',
  })
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application.',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of pages you want the pagination to return',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    description:
      'The position of the page number that you want the API to return',
    required: false,
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    if (getUserParamDto.id) {
      return this.usersService.findOneById(getUserParamDto.id);
    } else {
      return this.usersService.getUsers(getUserParamDto, limit, page);
    }
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @Auth(AuthType.None)
  @ApiOperation({
    summary: 'Creates a new user on the application.',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
  })
  @ApiBody({
    description: 'Body request to create a new user',
    type: CreateUserDto,
  })
  public async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Patch()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Updates a user on the application.',
  })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
  })
  @ApiBody({
    description: 'Body request to update a user',
    type: PatchUserDto,
  })
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
