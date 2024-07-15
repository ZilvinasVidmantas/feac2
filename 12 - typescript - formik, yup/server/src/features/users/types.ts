import { UserEntity } from "./user-model"

export type UserDto = {
  id: string,
  name: string,
  age: number,
  email: string,
  password: string,
  createAt: string,
  updatedAt: string,
}

export const userEntity2Dto = (userEntity: UserEntity): UserDto => {
  return {
    id: userEntity._id,
    name: userEntity.name,
    age: userEntity.age,
    email: userEntity.email,
    password: userEntity.password,
    createAt: userEntity.createdAt,
    updatedAt: userEntity.updatedAt,
  }
}