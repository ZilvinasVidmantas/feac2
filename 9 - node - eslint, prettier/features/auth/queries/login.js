const UserModel = require("../../users/user-model");
const formatAuthResponse = require("../helpers/format-auth-response");

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: password123
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
 *       401:
 *         description: Incorrect email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Incorrect email or password
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await UserModel.findOne({ email });
  if (!newUser || !(newUser.isCorrectPassword(password))) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }
  return res.status(200).json(formatAuthResponse(newUser));
};

module.exports = login;
