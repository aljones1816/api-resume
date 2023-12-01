/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Retrieve a list of projects
 *     description: Retrieves a list of projects from my portfolio, including details such as the project name, URL, repository link, description, and date of the project.
 *     responses:
 *       200:
 *         description: An array of project information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for the project.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the project.
 *                     example: "My API Project"
 *                   url:
 *                     type: string
 *                     format: uri
 *                     description: The live URL of the project.
 *                     example: "https://www.myapiproject.com"
 *                   repo:
 *                     type: string
 *                     format: uri
 *                     description: The repository URL of the project.
 *                     example: "https://www.github.com/myapiproject"
 *                   description:
 *                     type: string
 *                     description: A brief description of the project.
 *                     example: "An API project that does amazing things."
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date when the project was completed or launched.
 *                     example: "2021-01-01"
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import { getProjects } from "../controllers/projects.controller.js";

const router = express.Router();

router.get("/", getProjects);

export { router as projectsRouter };
