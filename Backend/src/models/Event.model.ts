import { Schema, model } from "mongoose";
import type { IEvent } from "../types/event.interface";

const EventSchema = new Schema<IEvent>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        speakers: { type: [String], default: [] },

        type: {
            type: String,
            enum: [
                "conference",
                "meetup",
                "workshop",
                "hackathon",
                "webinar",
                "seminar",
                "bootcamp",
            ],
            required: true,
        },

        venue: { type: String, required: true },

        date_from: { type: Date, required: true },

        date_to: {
            type: Date,
            required: true,
            validate: {
                validator: function (this: IEvent, v: Date) {
                    return this.date_from < v;
                },
                message: "date_to must be after date_from",
            },
        },

        cover: { type: String, required: true },
        photos: { type: [String], default: [] },
        gdgUrl: { type: String, required: true, unique: true },
        gdgEventId: { type: Number, required: true, unique: true },
        maxParticipants: { type: Number, default: 100 },
    },
    { timestamps: true }
);

export default model<IEvent>("Event", EventSchema);
