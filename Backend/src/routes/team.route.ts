import { Router } from "express";
import {
    createTeamMember,
    deleteTeamMember,
    getTeamMemberById,
    getTeamMembers,
    updateTeamMember,
} from "../controllers/team.controller";
import adminAuthMiddleware from "../middlewares/adminAuth.middleware";
import { body, param } from "express-validator";

const teamRouter = Router();

teamRouter.get("/", getTeamMembers);
teamRouter.get("/:id", param("id").exists().isMongoId(), getTeamMemberById);

// ADMIN ONLY ROUTES
teamRouter.use(adminAuthMiddleware);
teamRouter.post(
    "/create",
    body("name").exists().isString(),
    body("role").exists().isString(),
    body("bio").exists().isString(),
    body("photoUrl").optional().isURL(),
    body("linkedinUrl").optional().isURL(),
    body("githubUrl").optional().isURL(),
    body("twitterUrl").optional().isURL(),
    createTeamMember
);
teamRouter.put(
    "/:id",
    param("id").exists().isMongoId(),
    body("name").optional().isString(),
    body("role").optional().isString(),
    body("bio").optional().isString(),
    body("photoUrl").optional().isURL(),
    body("linkedinUrl").optional().isURL(),
    body("githubUrl").optional().isURL(),
    body("twitterUrl").optional().isURL(),
    updateTeamMember
);
teamRouter.delete("/:id", param("id").exists().isMongoId(), deleteTeamMember);

export default teamRouter;
