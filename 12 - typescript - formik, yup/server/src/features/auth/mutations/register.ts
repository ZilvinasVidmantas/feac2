import { RequestHandler } from "express";
import { UserModel } from "../../users/user-model";
import { formatAuthResponse } from "../helpers/format-auth-response";

export const register: RequestHandler = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new UserModel(user);
    await newUser.save();
    return res.status(201).json(formatAuthResponse(newUser));
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error registering new user.' });
  }
};

