import { Router } from "express";
import { createProject, delProject, getProjects } from "../controllers/index.js";

export const projectRouter = Router();
projectRouter.post(
    "/",
    createProject
);
projectRouter.get("/", getProjects);
projectRouter.delete("/:id", delProject);
