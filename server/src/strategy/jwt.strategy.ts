import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { jwtConstants } from '../constants'
import { JWTPayload } from '../modules/auth/interfaces/jwt-payload.interface'
import { UsersService } from '../modules/users/users.service'
import { UserEntity } from '../modules/users/entities/user.entity'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: JWTPayload): Promise<UserEntity> {
    const user = await this.usersService.findOne(payload.id)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
