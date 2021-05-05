import { ApiProperty } from '@nestjs/swagger'
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator'
import { Match } from '../../../decorators/match.decorator'

export class RegisterAuthDto {
  @IsString()
  @IsEmail(
    {},
    {
      message: 'Не валидный email',
    },
  )
  @IsNotEmpty()
  @ApiProperty()
  email: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string

  @IsString()
  @MinLength(8, {
    message: 'Пароль должен быть не менее 8ми символов',
  })
  @Matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/, {
    message:
      'Пароль должен содержать цифры, строчные латинские буквы, прописные латинские буквы.',
  })
  password1: string

  @IsString()
  @MinLength(8, {
    message: 'Пароль должен быть не менее 8ми символов',
  })
  @Match('password1', { message: 'Пароли не совпадают' })
  password2: string
}
