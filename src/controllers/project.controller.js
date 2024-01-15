import { Project } from "../models/index.js";

export const createProject = async (req, res) => {
    const details = req.body;

    const newProject = await Project(details);
    await newProject.save();

    return res.json(newProject);
};

export const getProjects = async (req, res) => {
    const projects = await Project.find({});

    return res.json(projects);
};

export const delProject = async (req, res) => {
    const id = req.params.id;
    await Project.findByIdAndDelete(id);

    return res.send("Deleted Successfully");
}
