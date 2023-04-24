//Central hub for all models

const db = require("./database");
const Student = require("./models/Students");
const Campus = require("./models/Campuses");

//Associations will be made here
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};