import { NextFunction, Request, Response, Router } from "express";

export const apiRouter = Router();

apiRouter.get("/test", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: "Hello world v1",
    });

    next();
});
