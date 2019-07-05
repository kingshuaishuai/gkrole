'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE, TEXT }) => {
    return queryInterface.createTable('Fms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      title: STRING(40),
      image_url: STRING(20),
      audio_url: STRING(20),
      content: TEXT,
      description: STRING,
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
    return queryInterface.dropTable('Fms');
  }
};
