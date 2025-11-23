import { OAuth2Client } from "google-auth-library";
import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import type { MyResponse } from "../types/response";
import { validationResult } from "express-validator";
import User from "../models/User.model";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// === Google Auth ===
const googleOAuth = asyncHandler(async (req: Request, res: MyResponse) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        throw new ApiError(400, JSON.stringify(result.mapped()));
    }

    const { credential } = req.body;
    const audience = process.env.GOOGLE_CLIENT_ID;

    if (!audience) {
        throw new ApiError(500, "Google client ID is not configured");
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: audience,
        });

        const payload = ticket.getPayload();
        if (!payload) {
            throw new ApiError(400, "Invalid Google token payload");
        }

        const { sub, email, name, picture, email_verified } = payload;

        const user = await User.findOneAndUpdate(
            { googleId: sub },
            {
                googleId: sub,
                email,
                name,
                photo: picture,
                verifiedEmail: email_verified,
            },
            { upsert: true, new: true }
        );

        if (!user) {
            throw new ApiError(500, "Failed to create or retrieve user");
        }

        const token = (user as any).generateJWT();

        res.sendResponse(200, "Google authentication successful", { token });
    } catch (error) {
        console.error(error);
        throw new ApiError(400, "Invalid Google token");
    }
});

export { googleOAuth };
