'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostComment = sequelize.define('PostComment', {
    post_id: DataTypes.INTEGER
  }, {});
  PostComment.associate = function(models) {
    // associations can be defined here
  };
  return PostComment;
};