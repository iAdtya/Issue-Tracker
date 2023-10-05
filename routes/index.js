import express from "express";
import mongoose from "mongoose";

import home from "../controllers/home_controllers.js";

const router = express.Router();  

router.get('/',home);
console.log("router loaded");

export default router;