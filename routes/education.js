/**
 * @swagger
 * /education:
 *   get:
 *     summary: Retrieve the Education section of my resume
 *     description: Retrieves Education history section of my resume, including schools attended, degree earned, dates attended, and GPA.
 *     responses:
 *       200:
 *         description: An array of education info.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   school:
 *                     type: string
 *                     description: Name of university.
 *                     example: School of Hard Knocks
 *                   degree:
 *                     type: string
 *                     description: Degree earned.
 *                     example: Bachelor of Science RESTful APIs
 *                   gpa:
 *                     type: number
 *                     format: float
 *                     description: Grade point average earned.
 *                     example: 1.01
 *                   start_date:
 *                     type: string
 *                     format: date
 *                     description: Date first attended.
 *                     example: '1999-12-31'
 *                   end_date:
 *                     type: string
 *                     format: date
 *                     description: Date graduated.
 *                     example: '2000-01-01'
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import { getEducation } from "../controllers/education.controller.js";

const router = express.Router();

router.get("/", getEducation);

export { router as educationRouter };
