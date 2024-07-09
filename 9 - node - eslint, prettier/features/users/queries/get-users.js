const UserModel = require('../user-model');

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
const getUsers = async (req, res) => {
  const studyPrograms = await UserModel.find();
  
  res.status(200).json(studyPrograms);
};

module.exports = getUsers;