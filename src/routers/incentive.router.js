import { Router } from "express";
import { createIncentive, getIncentives } from "../controllers/index.js";

export const incentiveRouter = Router();
incentiveRouter.post(
    "/",
    createIncentive
);
incentiveRouter.get("/", getIncentives);

