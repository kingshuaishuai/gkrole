'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fm = sequelize.define('Fm', {
    title: DataTypes.STRING
  }, {});
  Fm.associate = function(models) {
    // associations can be defined here
  };
  return Fm;
};