const pool = require("../../db");

const getTaskById = async (id) => {
  try {
    const task = await pool.query("SELECT * FROM task_table WHERE task_id=$1", [
      id,
    ]);
    return task.rows[0];
  } catch (err) {
    return err;
  }
};
module.exports = getTaskById;
