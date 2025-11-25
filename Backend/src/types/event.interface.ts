import { Document } from "mongoose";

export type EventType =
    | "conference"
    | "meetup"
    | "workshop"
    | "hackathon"
    | "webinar"
    | "seminar"
    | "bootcamp";

export interface IEvent extends Document {
    title: string;
    description: string;
    speakers: string[];
    type: EventType;
    venue: string;
    date_from: Date;
    date_to: Date;
    cover: string;
    photos: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
