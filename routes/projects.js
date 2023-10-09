import express from "express";

const app =express.Router();

import { createProject,projectDetails } from "../controllers/Project_controllers.js";

app.post("/create", createProject);
app.get("/projectDetails/:id", projectDetails);

console.log("project router loaded")

export default app;