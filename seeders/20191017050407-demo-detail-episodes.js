'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_episodes', [
      {
        "page": 1,
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "id_episodes": 1
      },
      {
        "page": 2,
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "id_episodes": 1
      },
      {
        "page": 3,
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "id_episodes": 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};  