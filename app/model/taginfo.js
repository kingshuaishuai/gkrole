'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagInfo = sequelize.define('TagInfo', {
    tag_id: DataTypes.INTEGER
  }, {});
  TagInfo.associate = function(models) {
    // associations can be defined here
  };
  return TagInfo;
};