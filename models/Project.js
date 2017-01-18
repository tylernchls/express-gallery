module.exports = function(sequelize, DataTypes) {
  let Project = sequelize.define("Project", {
    link: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Project.belongsTo(models.Author)
      }
    }
  });

  return Project;
};