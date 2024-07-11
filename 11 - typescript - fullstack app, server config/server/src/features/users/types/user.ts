export type UserBody = {
  name: string,
  age: number,
  email: string,
  password: string,
}

export type UserEntity = MongooseEntity & UserBody;

export type User = Omit<UserEntity, 'password'>;
