'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageComment = sequelize.define('ImageComment', {
    name: DataTypes.STRING
  }, {});
  ImageComment.associate = function(models) {
    // associations can be defined here
  };
  return ImageComment;
};