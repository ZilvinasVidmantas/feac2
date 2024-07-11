import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

type UserBody = {
  name: string,
  age: number,
  email: string,
  password: string,
}

type IUser = UserBody & MongooseEntity;

type UserDto = Omit<UserBody & Entity, 'password'>;

type UserMethods = {
  isCorrectPassword: (password: string) => boolean, 
  toDto: (this: IUser) => UserDto,
}

type UserModel = mongoose.Model<IUser, {}, UserMethods>;

const userSchema = new mongoose.Schema<UserBody, UserModel, UserMethods>(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre('save', async function hashPasswordOnSave(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.addMethod('isCorrectPassword', function isCorrectPassword(password) {
  const isValid = bcrypt.compareSync(password, this.password);
  return isValid;
});

userSchema.methods.addMethod('toDto', function (this: IUser) {

  return {
    id: this._id,
    name: this.name,
    age: this.age,
    email: this.email,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  }
});

export const UserModel = mongoose.model<IUser, UserModel>('User', userSchema);
