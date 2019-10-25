'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER
  }, {});
  episodes.associate = function (models) {
    episodes.hasMany(models.detail_episodes, { foreignKey: 'id_episodes', as: 'detaildata' });
  };
  return episodes;
}; 