import express from "express";
import {
  getExperience,
  getExperienceByID,
} from "../controllers/experience.controller.js";

const router = express.Router();

router.get("/", getExperience);
router.get("/:id", getExperienceByID);

export { router as experienceRouter };
