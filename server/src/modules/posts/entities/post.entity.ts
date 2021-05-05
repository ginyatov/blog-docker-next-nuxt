import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { UserEntity } from '../../users/entities/user.entity'

@Entity({ name: 'Posts' })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column()
  title: string

  @IsNotEmpty()
  @Column()
  description: string

  @ManyToOne(() => UserEntity, (user) => user.posts, { eager: false })
  user: UserEntity

  @Column()
  userId: number
}
