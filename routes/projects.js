import express from "express";

const app =express.Router();

import { createProject } from "../controllers/Project_controllers.js";

app.post("/create", createProject);

console.log("project router loaded")

export default app;