import { pool } from "../db/index.js";

const getExperience = async (req, res) => {
  try {
    const client = await pool.connect();
    const query = "SELECT * FROM experience;";
    const result = await client.query(query);

    client.release();

    res.json(result.rows);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getExperienceByID = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await pool.connect();
    const query = "SELECT * FROM experience WHERE id = $1";
    const values = [id];
    const result = await client.query(query, values);

    client.release();

    res.json(result.rows);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getExperience, getExperienceByID };
