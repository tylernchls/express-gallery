'use strict';

const CONFIG = require('../config/config');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(CONFIG.saltRounds);
const newPassword = bcrypt.hashSync(CONFIG.seedPassword, salt);

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'tylernchls',
      password: newPassword,
      createdAt : new Date(),
      updatedAt : new Date(),
      Admin: true
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      username: 'tylernchls'
    }]);
  }
};
