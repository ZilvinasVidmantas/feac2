const StudyProgramModel = require("../study-program-model");

/**
 * @swagger
 * /api/study-programs:
 *   post:
 *     description: Add a new study program
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudyProgramBody'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudyProgram'
 */
const createStudyProgram = async (req, res) => {
  const { name, price, durationInHours } = req.body;
  if (!name || typeof price !== 'number' || typeof durationInHours !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const studyProgramProps = {
    name,
    price,
    durationInHours
  };
  const newStyduProgram = await StudyProgramModel.create(studyProgramProps);
  res.status(200).json(newStyduProgram);
}

module.exports = createStudyProgram;