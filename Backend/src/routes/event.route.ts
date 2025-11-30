import { Router } from "express";
import {
    createEvent,
    getAllEvents,
    getEventById,
    refreshEvent,
} from "../controllers/event.controller";
import adminAuthMiddleware from "../middlewares/adminAuth.middleware";
import { body, param } from "express-validator";

const eventRouter = Router();

eventRouter.get("/all", getAllEvents);
eventRouter.get(
    "/:id",
    param("id").isMongoId().withMessage("Invalid event ID"),
    getEventById
);

eventRouter.use(adminAuthMiddleware);
eventRouter.post(
    "/create",
    body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 5 })
        .withMessage("Title must be at least 5 characters long"),
    body("description")
        .notEmpty()
        .isLength({ min: 10 })
        .withMessage("Description is required"),
    body("speakers")
        .isArray({ min: 1 })
        .withMessage("At least one speaker is required"),
    body("type")
        .notEmpty()
        .isIn([
            "conference",
            "meetup",
            "workshop",
            "hackathon",
            "webinar",
            "seminar",
            "bootcamp",
        ])
        .withMessage("Invalid event type"),
    body("venue").notEmpty().withMessage("Venue is required"),
    body("date_from")
        .notEmpty()
        .isISO8601()
        .toDate()
        .withMessage("Invalid start date"),
    body("date_to").notEmpty().toDate().withMessage("Invalid end date"),
    body("gdgUrl")
        .notEmpty()
        .withMessage("GDG URL is required")
        .bail()
        .matches(
            /^https:\/\/gdg\.community\.dev\/(e\/[a-zA-Z0-9]+\/?|events\/details\/[a-z0-9-]+\/?)$/
        )
        .withMessage("Invalid GDG event URL format"),
    createEvent
);
eventRouter.post("/refresh/:id", refreshEvent);

export default eventRouter;
