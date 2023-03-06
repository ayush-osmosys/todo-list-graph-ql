const pool = require("../../db");
require("dotenv").config();
const table = process.env.TASKTABLE;
// const postTask = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const queryString = `INSERT INTO ${table} (task_name,description) VALUES ($1,$2) RETURNING *`;
//     const result = await pool.query(queryString, [name, description]);
//     res.status(201).json(result.rows);
//   } catch (err) {
//     console.log(err);
//     res.status(404).json(err);
//   }
// };

const postTask = async (args) => {
  const queryString = `INSERT INTO ${table} (task_name,description,status) VALUES ($1,$2,$3) RETURNING *`;
  const result = await pool.query(queryString, [
    args.name,
    args.description,
    args.status,
  ]);
  console.log(result.rows);
  return result.rows[0];
};

module.exports = postTask;
