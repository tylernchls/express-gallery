'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Projects', [{
      link: 'www.loremipsum.com',
      description: 'Qui officia facere id magnam. Sint placeat quia eligendi et laborum earum natus labore. Ut qui id qui cumque fugit animi sit. Et architecto consequatur ut.',
      createdAt : new Date(),
      updatedAt : new Date(),
      AuthorId : 1
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects', [{
      link: 'www.loremipsum.com'
    }]);

  }
};
