'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'emortong',
      password: 'secret',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      username: 'emortong'
    }]);
  }
};
