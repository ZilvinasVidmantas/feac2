import { RequestHandler } from "express";
import { UserModel } from "../../users/user-model";
import { formatAuthResponse } from "../helpers/format-auth-response";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await UserModel.findOne({ email });
  if (!newUser || !(newUser.isCorrectPassword(password))) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  return res.status(200).json(formatAuthResponse(newUser));
};
