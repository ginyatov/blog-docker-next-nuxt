import { EntityRepository, Repository } from 'typeorm'
import { PostEntity } from './entities/post.entity'
import { CreatePostDto } from './dto/create-post.dto'
import { UserEntity } from '../users/entities/user.entity'
import { BadRequestException } from '@nestjs/common'
import { UpdatePostDto } from './dto/update-post.dto'

@EntityRepository(PostEntity)
export class PostsRepository extends Repository<PostEntity> {
  async createPost(
    createPostDto: CreatePostDto,
    user: UserEntity,
  ): Promise<PostEntity> {
    const data = {
      ...createPostDto,
      user,
    }
    const post = this.create(data)

    await post.save()
    delete post.user

    return post
  }

  async updatePost(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id)

    if (!Object.keys(updatePostDto).length) {
      throw new BadRequestException('Хотя бы одно поле нужно обновить.')
    }

    if (updatePostDto.title) {
      post.title = updatePostDto.title
    }

    if (updatePostDto.description) {
      post.description = updatePostDto.description
    }
    await post.save()

    return post
  }
}
