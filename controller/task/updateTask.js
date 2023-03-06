const pool = require("../../db");

// const updateTask = async (req, res) => {
//   try {
//     const { description } = req.body;
//     const { task_id } = req.params;
//     const result = await pool.query(
//       `UPDATE task_table SET description=$1 WHERE task_id=$2 RETURNING *`,
//       [description, task_id]
//     );
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.log(err);
//     res.send(500).json(err);
//   }
// };
const updateTask = async (args) => {
  const result = await pool.query(
    `UPDATE task_table SET description=$1 WHERE task_id=$2 RETURNING *`,
    [args.description, args.task_id]
  );
  console.log(result);
  return args;
};

module.exports = updateTask;
