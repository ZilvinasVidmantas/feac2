const StudyProgramModel = require('../study-program-model');

/**
 * @swagger
 * /api/study-programs:
 *   get:
 *     description: Get all study programs
 *     tags: [StudyPrograms]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudyProgram'
 */
const getStudyPrograms = async (req, res) => {
  const studyPrograms = await StudyProgramModel.find();
  
  res.status(200).json(studyPrograms);
};

module.exports = getStudyPrograms;
