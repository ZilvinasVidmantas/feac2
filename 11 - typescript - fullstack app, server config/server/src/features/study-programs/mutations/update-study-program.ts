const StudyProgramModel = require('../study-program-model');

/**
 * @swagger
 * /api/study-programs/{id}:
 *   put:
 *     tags: [StudyPrograms]
 *     description: Update a study program
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the study program
 *         schema:
 *           type: string
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
 *       404:
 *         description: Not Found
 */
async function updateStudyProgram(req, res) {
  const studyProgram = await StudyProgramModel.findById(req.params.id);
  if (!studyProgram) {
    res.status(404).json({
      error: 'The study program with the given ID was not found.',
    });
    return;
  }

  studyProgram.name = req.body.name;
  studyProgram.price = req.body.price;
  studyProgram.durationInHours = req.body.durationInHours;
  try {
    await studyProgram.save();
    res.status(200).json(studyProgram);
  } catch {
    res.status(400).json({ error: 'Invalid input' });
  }
}

module.exports = updateStudyProgram;
