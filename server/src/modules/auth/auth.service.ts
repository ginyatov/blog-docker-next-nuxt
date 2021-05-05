import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { UserEntity } from '../users/entities/user.entity'
import { LoginAuthDto } from './dto/login-auth.dto'
import { UtilsService } from '../../utils/services/utils.services'
import { JWTPayload } from './interfaces/jwt-payload.interface'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.usersService.findOneByEmail(email)

    if (!user) {
      return null
    }
    const hash = await UtilsService.generateHash(password, user.salt)

    if (hash !== user.password) {
      return null
    }

    return user
  }

  async registration(registerAuthDto: RegisterAuthDto) {
    const user = await this.usersService.create(registerAuthDto)

    return this.getToken(user)
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.validateUser(
      loginAuthDto.email,
      loginAuthDto.password,
    )

    if (!user) {
      throw new UnauthorizedException('Неверные данные')
    }

    return this.getToken(user)
  }

  private getToken(user: UserEntity) {
    const payload: JWTPayload = {
      id: user.id,
      roles: user.roles,
      username: user.username,
    }
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1h',
      }),
    }
  }
}
