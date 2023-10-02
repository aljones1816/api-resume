import { pool } from "../db/index.js";

const getAbout = async (req, res) => {
  try {
    const client = await pool.connect();
    const query = "SELECT * FROM about;";
    const result = await client.query(query);

    client.release();

    res.json(result.rows);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAbout };
