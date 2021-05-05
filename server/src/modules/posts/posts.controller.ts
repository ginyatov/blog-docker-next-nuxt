import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../../guards/jwt-auth.guard'
import { UserEntity } from '../users/entities/user.entity'
import { GetUser } from '../../decorators/get-user.decorator'

@ApiTags('posts')
@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /*@UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)*/

  @Post()
  create(@Body() createPostDto: CreatePostDto, @GetUser() user: UserEntity) {
    return this.postsService.create(createPostDto, user)
  }

  @Get()
  findAll() {
    return this.postsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(id, updatePostDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id)
  }
}
