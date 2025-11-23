import { Router } from "express";
import { googleOAuth } from "../controllers/auth.controller";
import { body } from "express-validator";

const authRouter = Router();

authRouter.post(
    "/google",
    body("credential").notEmpty().withMessage("Credential is required"),
    googleOAuth
);

export default authRouter;
