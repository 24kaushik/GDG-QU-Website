import { Schema, model } from "mongoose";
import type { TeamMember } from "../types/TeamMember.interface";

const TeamMemberSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        photoUrl: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        linkedinUrl: {
            type: String,
        },
        githubUrl: {
            type: String,
        },
        twitterUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

export default model<TeamMember>("TeamMember", TeamMemberSchema);
