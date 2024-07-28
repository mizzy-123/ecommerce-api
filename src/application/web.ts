import express from "express";
import corsMiddleware from "../middleware/cors-middleware";

export const web = express();

web.use("/public", express.static("./public"));

web.use(corsMiddleware);
web.use(express.json());
web.use(express.urlencoded({ extended: true }));
