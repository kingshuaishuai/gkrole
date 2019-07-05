'use strict';
module.exports = {
  up: (queryInterface, { STRING, DATE, INTEGER }) => {
    return queryInterface.createTable('TeamStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      type: STRING(20),
      user_id: INTEGER,
      team_id: INTEGER,
      type_link: STRING(20),
      title: STRING(40),
      image_url: STRING(20),
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
    return queryInterface.dropTable('TeamStatuses');
  }
};
