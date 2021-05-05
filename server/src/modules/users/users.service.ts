import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Role } from '../../enums/roles.enum'
import { RegisterAuthDto } from '../auth/dto/register-auth.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './entities/user.entity'
import { UtilsService } from '../../utils/services/utils.services'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersRepository } from './users.repository'

export type UserType = {
  id: number
  email: string
  roles: string[]
  password: string
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  findAll(): Promise<UserType[] | []> {
    return this.usersRepository.find()
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email,
      },
    })
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException(`Пользователь с id - ${id} не найден. `)
    }
    return user
  }

  async create(registerAuthDto: RegisterAuthDto) {
    return await this.usersRepository.createUser(registerAuthDto)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      id: +id,
      ...updateUserDto,
    })

    if (!user) {
      throw new NotFoundException(`Пользователь id - ${id} не найден. `)
    }

    return this.usersRepository.save(user)
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne(id)

    return this.usersRepository.remove(user)
  }
}
