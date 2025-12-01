import { validationResult } from "express-validator";
import Event from "../models/Event.model";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { fetchGdgMedia } from "../utils/eventFetcher";

// TODO: pagenation
export const getAllEvents = asyncHandler(
    async (req: Request, res: Response) => {
        const events = await Event.find().sort({ date_from: -1 });
        res.sendResponse(200, "Events fetched successfully", events);
    }
);

export const getEventById = asyncHandler(async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
        throw new ApiError(404, "Event not found");
    }
    res.sendResponse(200, "Event fetched successfully", event);
}); 

export const createEvent = asyncHandler(async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ApiError(400, JSON.stringify(errors.array()));
    }
    const {
        title,
        description,
        speakers,
        type,
        venue,
        date_from,
        date_to,
        gdgUrl,
    } = req.body;

    // Fetching CoverImage, gdgEventId and photos from GDG URL
    const { coverImageUrl, gdgEventId, eventPhotos } = await fetchGdgMedia(gdgUrl);

    // Check if an event with the same gdgEventId already exists
    const existingEvent = await Event.findOne({ gdgEventId: gdgEventId });
    if (existingEvent) {
        throw new ApiError(409, "An event with the same GDG Event ID already exists");
    }

    const newEvent = await Event.create({
        title,
        description,
        speakers,
        type,
        venue,
        date_from,
        date_to,
        cover: coverImageUrl,
        photos: eventPhotos,
        gdgUrl,
        gdgEventId: Number(gdgEventId),
    });

    if (!newEvent) {
        throw new ApiError(500, "Failed to create event");
    }

    res.sendResponse(201, "Event created successfully", newEvent);
});

export const refreshEvent = asyncHandler(async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    // Fetching updated CoverImage and photos from GDG URL
    const { coverImageUrl, eventPhotos } = await fetchGdgMedia(event.gdgUrl);

    event.cover = coverImageUrl;
    event.photos = eventPhotos;
    await event.save();

    res.sendResponse(200, "Event refreshed successfully", event);
});

// TODO: Allow students to enroll for events
// TODO: Update and Delete Event controllers