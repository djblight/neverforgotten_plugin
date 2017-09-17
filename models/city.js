const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  let City = sequelize.define("City", {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },{
      timestamps:false
  });
  
  return City;
};
