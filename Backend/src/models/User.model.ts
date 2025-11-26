import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import type { IUser } from "../types/user.interface";

const UserSchema = new Schema(
    {
        // COMMON FIELDS
        name: { type: String },
        email: { type: String, required: true, unique: true },
        photo: { type: String },
        isAdmin: { type: Boolean, default: false },
        isProfileComplete: { type: Boolean, default: false },
        qid: { type: Number, unique: true, sparse: true },
        realName: { type: String },
        course: { type: String },
        branch: { type: String },

        // GOOGLE LOGIN FIELDS
        googleId: { type: String, unique: true, sparse: true },
        verifiedEmail: { type: Boolean },

        // GITHUB LOGIN FIELDS
        githubId: { type: Number, unique: true, sparse: true },
        githubUsername: { type: String },
        githubProfileUrl: { type: String },
    },
    { timestamps: true }
);

UserSchema.methods.generateJWT = function () {
    const payload = {
        id: this._id,
    };

    return jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: "7d",
    });
};

export default model<IUser>("User", UserSchema);
