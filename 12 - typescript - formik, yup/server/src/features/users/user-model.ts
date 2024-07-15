import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

export interface UserEntity extends MongooseEntity {
  name: string,
  age: number,
  email: string,
  password: string,
  isCorrectPassword: (password: string) => boolean, 
};

const userSchema = new mongoose.Schema<UserEntity>(
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



export const UserModel = mongoose.model<UserEntity>('User', userSchema);
