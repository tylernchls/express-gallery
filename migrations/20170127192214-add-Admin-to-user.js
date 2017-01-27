'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Users', 'Admin', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Users', 'Admin' );
  }
};
