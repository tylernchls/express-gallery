'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isUrl: true,
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  }, {
    classMethods: {
      associate: function(models) {
        Project.belongsTo(models.Author)
      }
    }
  });
  return Project;
};