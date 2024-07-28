import { NextFunction, Request, Response, Router } from "express";

export const publicRouter = Router();

publicRouter.get("/test2", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: "Hello world public v1",
    });

    next();
});
