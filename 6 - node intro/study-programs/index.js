const express = require('express');
const studyProgramsDb = require('./study-programs-data');

const ROUTER_API_BASE = '/api/study-programs';
const studyProgramsRouter = express.Router();

// Get all study programs
studyProgramsRouter.get(ROUTER_API_BASE, (req, res) => {
  res.status(200).json(studyProgramsDb);
});

// Get a specific study program
studyProgramsRouter.get(ROUTER_API_BASE + '/:id', (req, res) => {
  const studyProgram = studyProgramsDb.find(c => c.id === req.params.id);
  if (!studyProgram) return res.status(404).json({
    error: 'The study program with the given ID was not found.',
  });
  res.json(studyProgram);
});

// Add a new study program
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

// Update a study program
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

studyProgramsRouter.patch(ROUTER_API_BASE + '/:id')

// Delete a study program
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
