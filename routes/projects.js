import express from "express";

<<<<<<< HEAD
const app = express.Router();

import {
  createProject,
  projectDetails,
  Isuues,
} from "../controllers/Project_controllers.js";

app.post("/create", createProject);
app.get("/projectDetails/:id", projectDetails);
app.post("/projectDetails/Issues", Isuues);
app.get("/projectDetails/Issues/:id", Isuues);
=======

const app =express.Router();

import { createProject,projectDetails,createIssue } from "../controllers/Project_controllers.js";

app.post("/create", createProject);
app.get("/:id", projectDetails);
app.post("/:id", createIssue);

>>>>>>> new-branch

console.log("project router loaded");

export default app;
