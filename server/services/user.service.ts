import { Response } from "express";
import userModel from "../models/user.model";
import { redis } from "../utils/redis";

//get user by id
export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(200).json({
      success: true,
      user,
    });
  }
};

//get all users
export const getAllUserService = async (res: Response) => {
  const users = await userModel
    .find()
    .select("-password")
    .sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    users,
  });
};

//update user role
export const updateUserRoleService = async (
  res: Response,
  id: string,
  role: string
) => {
  const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  res.status(200).json({ success: true, user });
};
