//establishing connection
const { Sequelize } = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:ajj2623y@127.0.0.1:5432/campus_student_db",
  {
    logging: false,
  }
);

module.exports = db;
