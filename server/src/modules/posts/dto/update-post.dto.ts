import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsOptional } from 'class-validator'

export class UpdatePostDto {
  @ApiProperty({
    description: 'This is title for post',
    minimum: 1,
    maximum: 20,
  })
  @IsNotEmpty()
  @Length(1, 20)
  @IsOptional()
  title: string

  @IsNotEmpty()
  @IsOptional()
  description: string
}
