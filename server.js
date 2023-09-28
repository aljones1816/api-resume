import express from "express";
import { resumeRouter } from "./routes/resume.js";
import { experienceRouter } from "./routes/experience.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/resume", resumeRouter);
app.use("/experience", experienceRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
