import { Schema, model } from "mongoose";

const schema = new Schema(
    {
        project: String,
        trainee: String,
        employee: String,
    },
    { timestamps: true }
);

export const Training = model("training", schema);
