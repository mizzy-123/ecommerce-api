import { Router } from "express";
import { publicRouter } from "./public-api-v1";
import { apiRouter } from "./api-v1";

export const appRouter = Router();

appRouter.use("/api/v1", apiRouter);
appRouter.use("/api/v1", publicRouter);
