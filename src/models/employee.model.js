import { Schema, model } from "mongoose";

const schema = new Schema(
    {
        name: String,
        role: String,
        contributions: String,
    },
    { timestamps: true }
);

export const Employee = model("employee", schema);
