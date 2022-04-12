const {DataTypes } = require('sequelize');
const db = require('../configs/db')

const User = db.define('User', {

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
});

module.exports = User