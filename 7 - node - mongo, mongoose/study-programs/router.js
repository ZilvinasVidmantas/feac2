const express = require('express');
const bodyParser = require('body-parser');
const studyProgramsDb = require('./study-programs-data');

const ROUTER_API_BASE = '/api/study-programs';
const studyProgramsRouter = express.Router();

studyProgramsRouter.use(bodyParser.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     StudyProgram:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - durationInHours
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         durationInHours:
 *           type: number *     
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudyProgramBody:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - durationInHours
 *       properties:
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         durationInHours:
 *           type: number *     
 */



/**
 * @swagger
 * /api/study-programs:
 *   get:
 *     description: Get all study programs
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
studyProgramsRouter.get(ROUTER_API_BASE, (req, res) => {
  res.status(200).json(studyProgramsDb);
});

/**
 * @swagger
 * /api/study-programs/{id}:
 *   get:
 *     description: Get a specific study program
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
studyProgramsRouter.get(`${ROUTER_API_BASE}/:id`, (req, res) => {
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
studyProgramsRouter.post(ROUTER_API_BASE, (req, res) => {
  const { name, price, durationInHours } = req.body;
  if (!name || typeof price !== 'number' || typeof durationInHours !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const studyProgram = {
    id: Date.now.toString(),
    name,
    price,
    durationInHours
  };
  studyProgramsDb.push(studyProgram);
  res.status(200).json(studyProgram);
});

/**
 * @swagger
 * /api/study-programs/{id}:
 *   put:
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
studyProgramsRouter.put(`${ROUTER_API_BASE}/:id`, (req, res) => {
  const studyProgram = studyProgramsDb.find(c => c.id === req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });

  studyProgram.name = req.body.name;
  studyProgram.price = req.body.price;
  studyProgram.durationInHours = req.body.durationInHours;

  res.status(200).json(studyProgram);
});

/**
 * @swagger
 * /api/study-programs/{id}:
 *   delete:
 *     description: Delete a study program
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
studyProgramsRouter.delete(`${ROUTER_API_BASE}/:id`, (req, res) => {
  const studyProgram = studyProgramsDb.find(c => c.id === req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });

  const index = studyProgramsDb.indexOf(studyProgram);
  studyProgramsDb.splice(index, 1);

  res.status(200).json(studyProgram);
});

module.exports = studyProgramsRouter;
