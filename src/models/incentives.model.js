import { Schema, model } from "mongoose";

const schema = new Schema(
    {
        employee: String,
        bonus: Number,
    },
    { timestamps: true }
);

export const incentives = model("incentives", schema);
