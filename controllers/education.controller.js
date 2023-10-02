import { pool } from "../db/index.js";

const getEducation = async (req, res) => {
  try {
    const client = await pool.connect();

    const query = "SELECT * FROM education;";
    const result = await client.query(query);

    client.release();

    res.json(result.rows);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getEducation };
