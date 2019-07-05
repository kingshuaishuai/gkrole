'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE, TEXT }) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      title: STRING(40),
      description: STRING(255),
      content: TEXT,
      view: INTEGER,
      category_id: INTEGER,
      user_id: INTEGER,
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
    return queryInterface.dropTable('Posts');
  }
};
