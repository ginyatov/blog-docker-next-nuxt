import { Injectable, NotFoundException } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostsRepository } from './posts.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { PostEntity } from './entities/post.entity'
import { UserEntity } from '../users/entities/user.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private postsRepository: PostsRepository,
  ) {}

  async findAll() {
    return await this.postsRepository.find()
  }

  async findOne(id: number): Promise<PostEntity> {
    const found = await this.postsRepository.findOne(id)

    if (!found) {
      throw new NotFoundException(`Пост id:"${id}" не найден`)
    }

    return found
  }

  async create(createPostDto: CreatePostDto, user: UserEntity) {
    return await this.postsRepository.createPost(createPostDto, user)
  }

  async delete(id: number) {
    const result = await this.postsRepository.delete(id)

    if (!result.affected) {
      throw new NotFoundException(`Пост id:"${id}" не найден`)
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return this.postsRepository.updatePost(id, updatePostDto)
  }
}
