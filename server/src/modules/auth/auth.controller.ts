import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { ApiTags } from '@nestjs/swagger'
import { UsersService } from '../users/users.service'
import { RegisterEntity } from './entities/register.entity'
import { LoginAuthDto } from './dto/login-auth.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto)
  }

  @Post('registration')
  async registration(
    @Body() registerAuthDto: RegisterAuthDto,
  ): Promise<RegisterEntity> {
    return this.authService.registration(registerAuthDto)
  }
}
