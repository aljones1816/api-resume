/**
 * @swagger
 * /experience:
 *   get:
 *     summary: Retrieve the Experience section of my resume
 *     description: Retrieves the professional experience section from my resume, including the names of current and previous employers, role, and dates of employment.
 *     responses:
 *       200:
 *         description: An array of work experience info.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   employer:
 *                     type: string
 *                     description: Name of employer.
 *                     example: Bob's API Emporium
 *                   role:
 *                     type: string
 *                     description: My job title.
 *                     example: Head API Maker
 *                   startDate:
 *                     type: string
 *                     format: date
 *                     description: Date first employed
 *                     example: 1999-01-01
 *                   endDate:
 *                     type: string
 *                     format: date
 *                     description: Date last employed
 *                     example: 1999-01-02
 *                   location:
 *                     type: string
 *                     description: Employer's location
 *                     example: Los Angeles, CA
 *                   description:
 *                     type: string
 *                     description: List of my key responsibilities and accomplishments.
 *                     example: I did this and that, and the other, too.
 *       500:
 *         description: Internal Server Error
 *
 * /experience/{id}:
 *   get:
 *     summary: Retrieve specific experience by ID
 *     description: Retrieves details of a specific professional experience from my resume by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the experience.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of a specific experience.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // similar properties as in the general GET
 *       404:
 *         description: Experience not found.
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import {
  getExperience,
  getExperienceByID,
} from "../controllers/experience.controller.js";

const router = express.Router();

router.get("/", getExperience);
router.get("/:id", getExperienceByID);

export { router as experienceRouter };
