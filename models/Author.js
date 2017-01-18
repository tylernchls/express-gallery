module.exports = function(sequelize, DataTypes) {
  let Author = sequelize.define("Author", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.Project)
      }
    }
  });

  return Author;
};