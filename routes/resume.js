/**
 * @swagger
 * /resume:
 *   get:
 *     summary: Retrieve the complete resume
 *     description: Retrieves all sections of my resume in a single JSON object, including About Me, Experience, Education, Skills, and Projects.
 *     responses:
 *       200:
 *         description: A comprehensive JSON object containing all resume sections.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   about:
 *                     type: array
 *                     description: A list containing about me information.
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         location:
 *                           type: string
 *                         email:
 *                           type: string
 *                         github:
 *                           type: string
 *                         linkedin:
 *                           type: string
 *                         objective:
 *                           type: string
 *                   experience:
 *                     type: array
 *                     description: A list of professional experience entries.
 *                     items:
 *                       type: object
 *                       properties:
 *                         employer:
 *                           type: string
 *                         role:
 *                           type: string
 *                         startDate:
 *                           type: string
 *                           format: date
 *                         endDate:
 *                           type: string
 *                           format: date
 *                         location:
 *                           type: string
 *                         description:
 *                           type: string
 *                   education:
 *                     type: array
 *                     description: A list of education history entries.
 *                     items:
 *                       type: object
 *                       properties:
 *                         school:
 *                           type: string
 *                         degree:
 *                           type: string
 *                         gpa:
 *                           type: number
 *                           format: float
 *                         startDate:
 *                           type: string
 *                           format: date
 *                         endDate:
 *                           type: string
 *                           format: date
 *                   skills:
 *                     type: array
 *                     description: A list of skills with experience years.
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         skill:
 *                           type: string
 *                         years_exp:
 *                           type: integer
 *                   projects:
 *                     type: array
 *                     description: A list of projects completed.
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         url:
 *                           type: string
 *                         repo:
 *                           type: string
 *                         description:
 *                           type: string
 *                         date:
 *                           type: string
 *                           format: date
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import { getResume } from "../controllers/resume.controller.js";

const router = express.Router();

router.get("/", getResume);

export { router as resumeRouter };
