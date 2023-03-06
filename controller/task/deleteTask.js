const pool = require("../../db");

// const deleteTask = async (req, res) => {
//   try {
//     const { task_id } = req.params;
//     const result = await pool.query(
//       `DELETE FROM task_table WHERE task_id=$1 RETURNING *`,
//       [task_id]
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.send(500).json(err);
//   }
// };
const deleteTask = async (task_id) => {
  try {
    const result = await pool.query(
      `DELETE FROM task_table WHERE task_id=$1 RETURNING *`,
      [task_id]
    );
    console.log(result);
    return result.rows[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = deleteTask;
