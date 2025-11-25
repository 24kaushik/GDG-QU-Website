import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

// TODO: Add authentication middleware to protect this route
userRouter.get("/all", getAllUsers);

export default userRouter;