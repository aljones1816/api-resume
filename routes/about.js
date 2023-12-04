/**
 * @swagger
 * /about:
 *   get:
 *     summary: Retrieve the About Me section of my resume
 *     description: Retrieves the professional summary section from my resume, containing a brief outline of my professional goals and experience, along with contact information and the urls of my social media profiles.
 *     responses:
 *       200:
 *         description: An array of personal info.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: My name.
 *                     example: Bob Vance
 *                   location:
 *                     type: string
 *                     description: My location.
 *                     example: Anywhere, USA
 *                   email:
 *                     type: string
 *                     description: My email address.
 *                     example: my@email.com
 *                   portfolio:
 *                     type: string
 *                     description: My project portfolio website
 *                     example: https://www.google.com
 *                   github:
 *                     type: string
 *                     description: My github profile url.
 *                     example: https://www.github.com/profile
 *                   linkedin:
 *                     type: string
 *                     description: My LinkedIn url.
 *                     example: https://www.linkedin.com/in/somebody
 *                   objective:
 *                     type: string
 *                     description: My professional goals.
 *                     example: A bunch of text!
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import { getAbout } from "../controllers/about.controller.js";

const router = express.Router();

router.get("/", getAbout);

export { router as aboutRouter };
