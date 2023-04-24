const { DataTypes } = require("sequelize");
const db = require("../database");

const Student = db.define("student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png",
  },
  gpa: {
    type: DataTypes.DECIMAL(2, 1),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
