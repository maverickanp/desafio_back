import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { SharedProp } from './sharedProp.helper'

@Entity({ name: 'users' })
export class UserEntity extends SharedProp {
  constructor (
    name: string,
    email: string,
    password: string,
    category: string
  ) {
    super()
    this.name = name
    this.email = email
    this.password = password
    this.category = category
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'name', nullable: false })
  name: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: false })
  password: string

  @Column({ nullable: false })
  category: string
}
