const pool = require("../../db");
require("dotenv").config();
const table = process.env.TASKTABLE;

const postTask = async (args) => {
  try {
    const queryString = `INSERT INTO ${table} (task_name,description,status) VALUES ($1,$2,$3) RETURNING *`;
    const result = await pool.query(queryString, [
      args.name,
      args.description,
      args.status,
    ]);
    console.log(result.rows);
    return result.rows[0];
  } catch (err) {
    return err;
  }
};

module.exports = postTask;
