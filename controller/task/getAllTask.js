const pool = require("../../db");

const qureyText = "SELECT * FROM task_table;";

const getAllTask = async () => {
  try {
    const result = await pool.query(qureyText);
    return result.rows;
  } catch (err) {
    console.error(err);
    return err;
  }
};

module.exports = getAllTask;
