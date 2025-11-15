import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler";

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : [];
const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
};

const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Health check route
app.get("/", (_, res) => {
    res.send("Api is running...");
});

// Error handling middleware
app.use(errorHandler);

export default app;
