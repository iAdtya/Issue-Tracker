import express from "express";

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

console.log("project router loaded");

export default app;
