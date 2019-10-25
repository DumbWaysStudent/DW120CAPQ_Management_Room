'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_episodes = sequelize.define('detail_episodes', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_episodes: DataTypes.INTEGER
  }, {});
  detail_episodes.associate = function(models) {
    // associations can be defined here
  };
  return detail_episodes;
};