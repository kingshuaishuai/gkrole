'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamStatus = sequelize.define('TeamStatus', {
    type: DataTypes.STRING
  }, {});
  TeamStatus.associate = function(models) {
    // associations can be defined here
  };
  return TeamStatus;
};