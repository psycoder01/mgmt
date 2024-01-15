import { Incentive } from "../models/index.js";

export const createIncentive = async (req, res) => {
    const details = req.body;

    const newIncentive = await Incentive(details);
    await newIncentive.save();

    return res.json(newIncentive);
};

export const getIncentives = async (req, res) => {
    const incentives = await Incentive.find({});

    return res.json(incentives);
};
