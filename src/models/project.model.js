import { Schema, model } from "mongoose";

const schema = new Schema(
    {
        name: String,
        totalMembers: Number,
        picture: String,
    },
    { timestamps: true }
);

export const Project = model("project", schema);
