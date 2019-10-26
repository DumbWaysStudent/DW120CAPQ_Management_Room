'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    idcard: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};