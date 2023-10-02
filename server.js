import express from "express";
import { resumeRouter } from "./routes/resume.js";
import { experienceRouter } from "./routes/experience.js";
import { db } from "./db/index.js";
import { educationRouter } from "./routes/education.js";
import { skillsRouter } from "./routes/skills.js";
import { messagesRouter } from "./routes/messages.js";
import { aboutRouter } from "./routes/about.js";
import { projectsRouter } from "./routes/projects.js";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/resume", resumeRouter);
app.use("/experience", experienceRouter);
app.use("/education", educationRouter);
app.use("/skills", skillsRouter);
app.use("/message", messagesRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectsRouter);

app.listen(port, () => {
  db.runMigrations();
  console.log(`listening on port ${port}`);
});
