import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );

    res.json(result);
  } catch (error) {
    console.error("Error in getTasks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result[0]);
  } catch (error) {
    console.error("Error in getTask:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO tasks(title,description) VALUES (?,?)",
      [title, description]
    );

    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    console.error("Error in createTask:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    res.json(result);
  } catch (error) {
    console.error("Error in updateTask:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error("Error in deleteTask:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
