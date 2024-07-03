const express = require('express');
const studyProgramsDb = require('./study-programs-data');

const ROUTER_API_BASE = '/api/study-programs';
const studyProgramsRouter = express.Router();

/**
 * @swagger
 * /api/study-programs:
 *   get:
 *     description: Get all study programs
 *     responses:
 *       200:
 *         description: Success
 */
studyProgramsRouter.get(ROUTER_API_BASE, (req, res) => {
  res.status(200).json(studyProgramsDb);
});

/**
 * @swagger
 * /api/study-programs/{id}:
 *   get:
 *     description: Get a specific study program
 *     parameters:
 *       - name: id
 *         description: ID of the study program
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
studyProgramsRouter.get(ROUTER_API_BASE + '/:id', (req, res) => {
  const studyProgram = studyProgramsDb.find(c => c.id === req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });
  res.json(studyProgram);
});

/**
 * @swagger
 * /api/study-programs:
 *   post:
 *     description: Add a new study program
 *     parameters:
 *       - name: studyProgram
 *         description: Study program object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/StudyProgram'
 *     responses:
 *       200:
 *         description: Success
 */
studyProgramsRouter.post(ROUTER_API_BASE, (req, res) => {
  const studyProgram = {
    id: new Date().getMilliseconds().toString(),
    name: req.body.name,
    price: req.body.price,
    durationInHours: req.body.durationInHours
  };
  studyProgramsDb.push(studyProgram);
  res.json(studyProgram);
});

/**
 * @swagger
 * /api/study-programs/{id}:
 *   put:
 *     description: Update a study program
 *     parameters:
 *       - name: id
 *         description: ID of the study program
 *         in: path
 *         required: true
 *         type: string
 *       - name: studyProgram
 *         description: Study program object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/StudyProgram'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
studyProgramsRouter.put(ROUTER_API_BASE + '/:id', (req, res) => {
  const studyProgram = studyProgramsDb.find(c => c.id === req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });

  studyProgram.name = req.body.name;
  studyProgram.price = req.body.price;
  studyProgram.durationInHours = req.body.durationInHours;

  res.json(studyProgram);
});

// The PATCH method is not implemented, so no JSDoc comment is added for it
studyProgramsRouter.patch(ROUTER_API_BASE + '/:id')

/**
 * @swagger
 * /api/study-programs/{id}:
 *   delete:
 *     description: Delete a study program
 *     parameters:
 *       - name: id
 *         description: ID of the study program
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
studyProgramsRouter.delete('/:id', (req, res) => {
  const studyProgram = studyProgramsDb.find(c => c.id === req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });

  const index = studyProgramsDb.indexOf(studyProgram);
  studyProgramsDb.splice(index, 1);

  res.json(studyProgram);
});

module.exports = studyProgramsRouter;