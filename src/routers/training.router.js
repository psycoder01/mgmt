import { Router } from "express";
import { createTraining, delTraining, getTrainings } from "../controllers/index.js";

export const trainingRouter = Router();
trainingRouter.post(
    "/",
    createTraining
);
trainingRouter.get("/", getTrainings);
trainingRouter.delete("/:id", delTraining);
