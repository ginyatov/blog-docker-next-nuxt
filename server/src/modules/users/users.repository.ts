import { EntityRepository, Repository } from 'typeorm'
import { UserEntity } from '../users/entities/user.entity'
import { RegisterAuthDto } from '../auth/dto/register-auth.dto'
import { UtilsService } from '../../utils/services/utils.services'
import { Role } from '../../enums/roles.enum'
import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common'

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  private logger = new Logger('UsersRepository')

  async createUser(registerAuthDto: RegisterAuthDto): Promise<UserEntity> {
    const salt = await UtilsService.generateSalt()
    const hashedPassword = await UtilsService.generateHash(
      registerAuthDto.password1,
      salt,
    )

    const dbDate = {
      email: registerAuthDto.email,
      username: registerAuthDto.username,
      password: hashedPassword,
      salt: salt,
      roles: [Role.User],
    }

    try {
      const user = this.create(dbDate)

      await user.save()
      return user
    } catch (error) {
      this.logger.error(
        `Не удалось создать email ${registerAuthDto.email}.`,
        error.stack,
      )
      if (error.code === '23505') {
        throw new ConflictException('Такой email уже существует')
      } else {
        throw new InternalServerErrorException()
      }
    }
  }
}
