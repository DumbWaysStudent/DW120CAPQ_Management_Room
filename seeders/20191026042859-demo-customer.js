'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      name: 'tomi',
      idcard: '123456565',
      phone_number: 1234,
      image: 'panji.jgg'
    },
    {
      name: 'romi',
      idcard: '123456565',
      phone_number: 1234,
      image: 'panji.jgg'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};