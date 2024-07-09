const StudyProgramModel = require('../study-program-model');

/**
 * @swagger
 * /api/study-programs/{id}:
 *   get:
 *     description: Get a specific study program
 *     tags: [StudyPrograms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the study program
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudyProgram'
 *       404:
 *         description: Not Found
 */
const getStudyProgram = async (req, res) => {
  const studyProgram = await StudyProgramModel.findById(req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });
  res.json(studyProgram);
};

module.exports  = getStudyProgram;