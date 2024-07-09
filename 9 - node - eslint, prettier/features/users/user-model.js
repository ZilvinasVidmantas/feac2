const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         age:
 *           type: number
 *           description: The age of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The hashed password of the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was last updated
 *       example:
 *         id: d5fE_asz
 *         name: John Doe
 *         age: 29
 *         email: johndoe@example.com
 *         password: $2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36z4zN7jTOG2JbG6eU0t1Wy
 *         createdAt: 2023-07-08T14:21:00Z
 *         updatedAt: 2023-07-08T14:21:00Z
 */

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = function (password) {
  const isValid = bcrypt.compareSync(password, this.password);
  return isValid;
};

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
