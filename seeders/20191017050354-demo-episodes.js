'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        "title": "Ep. 1",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 1
      },
      {
        "title": "Ep. 2",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 1
      },
      {
        "title": "Ep. 3",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 1
      },
      {
        "title": "Ep. 1",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 2
      },
      {
        "title": "Ep. 2",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 2
      },
      {
        "title": "Ep. 3",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 2
      },
      {
        "title": "Ep. 1",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 3
      },
      {
        "title": "Ep. 2",
        "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
        "createdAt": "2019-10-10T08:31:21+00:00",
        "updatedAt": "2019-10-10T08:31:21+00:00",
        "id_webtoon": 3
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
  }
};
