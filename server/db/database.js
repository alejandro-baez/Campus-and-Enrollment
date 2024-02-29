//establishing connection
const { Sequelize } = require("sequelize");
const db = new Sequelize(
  "postgres://postgres:ajj2623y@localhost:5432/campus_student_db",
  {
    logging: false,
  }
);

module.exports = db;
