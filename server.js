import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { resumeRouter } from "./routes/resume.js";
import { experienceRouter } from "./routes/experience.js";
import { db } from "./db/index.js";
import { educationRouter } from "./routes/education.js";
import { skillsRouter } from "./routes/skills.js";
import { messagesRouter } from "./routes/messages.js";
import { aboutRouter } from "./routes/about.js";
import { projectsRouter } from "./routes/projects.js";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API Alan Jones's Resume",
    version: "1.0.0",
    description:
      "This simple Express app lets you access my resume via a REST API",
    contact: {
      name: "Alan Jones",
      url: "https://alanjones.dev",
    },
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();
const port = 3001;

const apiRouter = express.Router();

app.use(express.json());

apiRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
apiRouter.use("/resume", resumeRouter);
apiRouter.use("/experience", experienceRouter);
apiRouter.use("/education", educationRouter);
apiRouter.use("/skills", skillsRouter);
apiRouter.use("/message", messagesRouter);
apiRouter.use("/about", aboutRouter);
apiRouter.use("/projects", projectsRouter);

app.use("/api", apiRouter);

app.listen(port, () => {
  db.runMigrations();
  console.log(`listening on port ${port}`);
});
