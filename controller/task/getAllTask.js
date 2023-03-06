const pool = require("../../db");

const qureyText = "SELECT * FROM task_table;";

// const getAllTask = async (req, res) => {
//   try {
//     const result = await pool.query(qureyText);
//     res.send(result.rows);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// };

const getAllTask = async () => {
  const result = await pool.query(qureyText);
  return result.rows;
};

module.exports = getAllTask;
