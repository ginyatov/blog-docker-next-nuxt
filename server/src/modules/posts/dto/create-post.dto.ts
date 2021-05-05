import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({
    description: 'This is title for post',
    minimum: 1,
    maximum: 20,
  })
  @IsNotEmpty()
  @Length(1, 20)
  title: string

  @IsNotEmpty()
  description: string
}
