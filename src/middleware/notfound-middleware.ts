import { NextFunction, Request, Response } from "express";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        error: "Not found",
    });

    next();
};
