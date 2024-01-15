import { Training } from "../models/index.js";

export const createTraining = async (req, res) => {
    const details = req.body;

    const newTraining = await Training(details);
    await newTraining.save();

    return res.json(newTraining);
};

export const getTrainings = async (req, res) => {
    const trainings = await Training.find({});

    return res.json(trainings);
};

export const delTraining = async (req, res) => {
    const id = req.params.id;
    await Training.findByIdAndDelete(id);

    return res.send("Deleted Successfully");
}

