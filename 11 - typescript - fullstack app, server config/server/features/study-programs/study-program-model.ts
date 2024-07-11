const mongoose = require('mongoose');

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

const studyProgramSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    durationInHours: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

studyProgramSchema.set('toJSON', {
  transform: (doc, { _id, ...props }) => ({
    ...props,
    id: _id,
  }),
});

const StudyProgramModel = mongoose.model('StudyProgram', studyProgramSchema);

module.exports = StudyProgramModel;
