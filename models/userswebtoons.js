'use strict';
module.exports = (sequelize, DataTypes) => {
  const userswebtoons = sequelize.define('userswebtoons', {
    createdBy: DataTypes.INTEGER,
    id_webtoon: DataTypes.INTEGER
  }, {});
  userswebtoons.associate = function (models) {

    userswebtoons.belongsTo(models.webtoons, {
      as: 'WebtoonData',
      foreignKey: 'id_webtoon'
    })

  };
  return userswebtoons;
}; 