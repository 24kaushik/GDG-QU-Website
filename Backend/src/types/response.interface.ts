import type { Response } from "express";

declare global {
    namespace Express {
        interface Response {
            sendResponse: (
                statusCode: number,
                message: string,
                data?: any
            ) => void;
        }
    }
}

export type { Response };