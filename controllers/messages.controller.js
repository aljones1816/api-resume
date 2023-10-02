import { pool } from "../db/index.js";

const getMessages = async (req, res) => {
  try {
    const client = await pool.connect();
    const query = "SELECT * FROM messages;";
    const result = await client.query(query);

    client.release();

    res.json(result.rows);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postMessage = async (req, res) => {
  try {
    const client = await pool.connect();
    const { email, message } = req.body;
    console.log("Request body:", req.body);
    const query = "INSERT INTO messages (email, message) VALUES ($1, $2)";
    const values = [email, message];
    const result = await client.query(query, values);

    client.release();

    res.status(201).json({ message: "Message successfully added" });
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteMessageByEmail = async (req, res) => {
  try {
    const client = await pool.connect();
    const email = req.params.email;
    const query = "DELETE FROM messages WHERE email = $1;";
    const value = [req.params.email];

    const result = await client.query(query, value);

    client.release();

    if (result.rowCount === 0) {
      // If no rows were deleted, the email doesn't exist
      res.status(404).json({ message: "Email not found" });
    } else {
      res.status(200).json({ message: "Message deleted successfully" });
    }
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getMessages, postMessage, deleteMessageByEmail };
