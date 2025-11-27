import { validationResult } from "express-validator";
import Event from "../models/Event.model";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

// TODO: pagenation
export const getAllEvents = asyncHandler(
    async (req: Request, res: Response) => {
        const events = await Event.find().sort({ date: -1 });
        res.sendResponse(200, "Events fetched successfully", events);
    }
);

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

    // Fetching CoverImage, eventId from the gdg event url provided
    const [coverImageUrl, gdgEventId] = await fetch(gdgUrl)
        .then((res) => {
            if (!res.ok) {
                throw new ApiError(400, "Cover image URL is not reachable");
            }
            return res.text();
        })
        .then((data) => {
            return [
                (data as string)
                    .split(`"event_banner":`)[1]
                    ?.split(`",`)[0]
                    ?.replace('"', "") || "",
                (data as string)
                    .split(`"eventid":`)[1]
                    ?.split(`,`)[0]
                    ?.trim() || "",
            ];
        })
        .catch(() => {
            throw new ApiError(400, "Failed to fetch cover image from GDG URL");
        });

    if (!coverImageUrl || !gdgEventId) {
        throw new ApiError(400, "Invalid GDG event URL provided");
    }

    // Fetching event photos from GDG API
    const eventPhotos: any[] = await fetch(
        `https://gdg.community.dev/api/event_wrapup_photos/${gdgEventId}/`
    )
        .then((res) => {
            if (!res.ok) {
                return [];
            }
            return res.json();
        })
        .then((data: any) => {
            return data?.results?.map((photo: any) => photo?.picture?.url);
        })
        .catch(() => {
            return [];
        });

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
