const { DataTypes } = require("sequelize");
const db = require("../database");

const Campus = db.define("campus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/colleges/layout/City-College-Photo-Request-2017_48_CarlosParker_HarrisHall.jpg",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Campus;
