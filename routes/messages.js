/**
 * @swagger
 * /message:
 *   get:
 *     summary: Retrieve all messages
 *     description: Retrieve messages previous users have left on my resume - read at your own risk!
 *     responses:
 *       200:
 *         description: An array of messages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                     description: Email of the person leaving the message.
 *                   message:
 *                     type: string
 *                     description: The user's message.
 *       500:
 *         description: Internal Server Error
 *
 *   post:
 *     summary: Create a new message
 *     description: Add a new message with email and message body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Your email address.
 *                 example: me@myemail.com
 *               message:
 *                 type: string
 *                 description: Your message.
 *                 example: Hi, Alan!
 *     responses:
 *       201:
 *         description: Message successfully added.
 *       500:
 *         description: Internal Server Error
 *
 * /message/{email}:
 *   delete:
 *     summary: Delete a message by email
 *     description: Deletes a message based on the email address provided.
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email of the message to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Message deleted successfully.
 *       404:
 *         description: Email not found.
 *       500:
 *         description: Internal Server Error
 */

import express from "express";
import {
  deleteMessageByEmail,
  getMessages,
  postMessage,
} from "../controllers/messages.controller.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", postMessage);
router.delete("/:email", deleteMessageByEmail);

export { router as messagesRouter };
