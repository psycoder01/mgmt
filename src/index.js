import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { envVars } from "./config/index.js";
import { employeeRouter, projectRouter, trainingRouter } from "./routers/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/employee", employeeRouter);
app.use("/project", projectRouter);
app.use("/training", trainingRouter);

const { port, db_uri } = envVars;
mongoose
    .connect(db_uri)
    .then(() => console.log("Connected to database successfully"));
app.listen(port, () => {
    console.log("Server running at ", port);
});
