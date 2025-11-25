import type {Response} from 'express'

interface MyResponse extends Response {
    sendResponse: (statusCode: number, message: string, data?: any) => void;
}

export type { MyResponse };