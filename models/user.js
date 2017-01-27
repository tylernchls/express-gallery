'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    Admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Project)
      }
    }
  });
  return User;
};