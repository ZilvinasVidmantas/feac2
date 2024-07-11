import { UserModel } from '../user-model';
import { RequestHandler } from 'express';

export const getUsers: RequestHandler = async (req, res) => {
  const studyPrograms = await UserModel.find();

  res.status(200).json(studyPrograms.map(x => x.toDto()));
};

