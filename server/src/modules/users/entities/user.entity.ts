import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm'
import { Role } from '../../../enums/roles.enum'
import { Exclude } from 'class-transformer'
import { ApiHideProperty } from '@nestjs/swagger'
import { PostEntity } from '../../posts/entities/post.entity'

@Entity({ name: 'Users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
  })
  email: string

  @Column({
    unique: true,
  })
  username: string

  @Exclude()
  @ApiHideProperty()
  @Column()
  password: string

  @Exclude()
  @ApiHideProperty()
  @Column()
  salt: string

  @Column({ nullable: true })
  name?: string

  @Column('text', {
    array: true,
  })
  roles: Role[]

  @OneToMany(() => PostEntity, (post) => post.user, { eager: true })
  posts: PostEntity[]
}
