const UserModel = require('../../users/user-model');
const formatAuthResponse = require('../helpers/format-auth-response');
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: password123
 *               name:
 *                 type: string
 *                 description: The user's name
 *                 example: John Doe
 *               age:
 *                 type: number
 *                 description: The user's age
 *                 example: 98
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token
 *                 user:
 *                   $ref: '#/components/schemas/AuthResponse'
 */
const register = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new UserModel(user);
    await newUser.save();
    return res.status(201).json(formatAuthResponse(newUser));
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error registering new user.', error: error.message });
  }
};

module.exports = register;
