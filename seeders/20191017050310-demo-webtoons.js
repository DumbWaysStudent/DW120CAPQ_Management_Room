'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        "title": "True Beauty",
        "genre": "drama",
        "isFavorite": false,
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "createdBy": 1
      },
      {
        "title": "Age Matters",
        "genre": "Romance",
        "isFavorite": false,
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "createdBy": 1
      },
      {
        "title": "A Good Day to be a Dog",
        "genre": "Drama",
        "isFavorite": true,
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "createdBy": 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};