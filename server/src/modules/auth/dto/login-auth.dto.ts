import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginAuthDto {
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
  password: string
}
