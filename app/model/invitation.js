'use strict';
module.exports = (sequelize, DataTypes) => {
  const invitation = sequelize.define('invitation', {
    name: DataTypes.STRING
  }, {});
  invitation.associate = function(models) {
    // associations can be defined here
  };
  return invitation;
};