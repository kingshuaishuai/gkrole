'use strict';
module.exports = {
  up: (queryInterface, { STRING, INTEGER, DATE }) => {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      name: STRING(40),
      profile: STRING,
      creater_id: INTEGER,
      avatar: STRING(20),
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teams');
  }
};
