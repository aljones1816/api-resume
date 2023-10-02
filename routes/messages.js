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
