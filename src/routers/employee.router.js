import { Router } from "express";
import { createEmployee, getEmployees, delEmployee } from "../controllers/index.js";

export const employeeRouter = Router();
employeeRouter.post(
    "/",
    createEmployee
);
employeeRouter.get("/", getEmployees);
employeeRouter.delete("/:id", delEmployee);
