const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  description: {
    type: Sequelize.STRING
  },

 priority_level: {
    type: Sequelize.STRING
  },

  completion:{
    type: Sequelize.STRING
  }

  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;