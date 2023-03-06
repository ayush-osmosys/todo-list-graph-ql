const pool = require("../../db");

const deleteTask = async (task_id) => {
  try {
    const result = await pool.query(
      `DELETE FROM task_table WHERE task_id=$1 RETURNING *`,
      [task_id]
    );
    console.log(result);
    return result.rows[0];
  } catch (err) {
    console.err(err);
    return err;
  }
};

module.exports = deleteTask;
