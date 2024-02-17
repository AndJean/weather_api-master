/** @format */

import { getDays } from "../controllers/dayController.js";
import express from "express";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", getDays);

// We will export the router
export default router;
