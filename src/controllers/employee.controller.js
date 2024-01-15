import { Employee } from "../models/index.js";

export const createEmployee = async (req, res) => {
    const details = req.body;

    const newEmployee = await Employee(details);
    await newEmployee.save();

    return res.json(newEmployee);
};

export const getEmployees = async (req, res) => {
    const employees = await Employee.find({});

    return res.json(employees);
};

export const delEmployee = async (req, res) => {
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);

    return res.send("Deleted Successfully");
}
