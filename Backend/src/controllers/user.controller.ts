import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import User from "../models/User.model";

export const getAllUsers = asyncHandler(async (_: Request, res: Response) => {
    const users = await User.find();
    const data = {
        count: users.length,
        users,
    };
    res.sendResponse(200, "Users fetched successfully", data);
});
