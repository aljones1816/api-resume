import { pool } from "../db/index.js";

const getResume = async (req, res) => {
  try {
    const client = await pool.connect();
    const aboutQuery = "SELECT * FROM about;";
    const experienceQuery = "SELECT * FROM experience;";
    const educationQuery = "SELECT * FROM education;";
    const skillsQuery = "SELECT * FROM skills";
    const projectsQuery = "SELECT * FROM projects;";

    const about = await client.query(aboutQuery);
    const experience = await client.query(experienceQuery);
    const education = await client.query(educationQuery);
    const skills = await client.query(skillsQuery);
    const projects = await client.query(projectsQuery);

    client.release();

    res.json([
      { about: about.rows },
      { experience: experience.rows },
      { education: education.rows },
      { skills: skills.rows },
      { projects: projects.rows },
    ]);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getResume };
