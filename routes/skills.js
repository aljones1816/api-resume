/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Retrieve a list of skills
 *     description: Retrieves a list of my skills from the database, including each skill's name and the number of years of experience with that skill.
 *     responses:
 *       200:
 *         description: An array of skills.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for the skill.
 *                     example: 1
 *                   skill:
 *                     type: string
 *                     description: The name of the skill.
 *                     example: "JavaScript"
 *                   years_exp:
 *                     type: integer
 *                     description: The number of years of experience with the skill.
 *                     example: 5
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import { getSkills } from "../controllers/skills.controller.js";

const router = express.Router();

router.get("/", getSkills);

export { router as skillsRouter };
