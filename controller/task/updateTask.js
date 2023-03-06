const pool = require("../../db");
const updateTask = async (args) => {
  try {
    const result = await pool.query(
      `UPDATE task_table SET description=$1 WHERE task_id=$2 RETURNING *`,
      [args.description, args.task_id]
    );
    // console.log(result);
    return args;
  } catch (err) {
    console.err(err);
    return err;
  }
};

module.exports = updateTask;
