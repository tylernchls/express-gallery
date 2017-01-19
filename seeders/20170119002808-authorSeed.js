'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [{
      name: 'Estefania',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', [{
      name: 'Estefania'
    }]);
  }
};
