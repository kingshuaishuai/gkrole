'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE }) => {
    return queryInterface.createTable('PostComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      post_id:  INTEGER,
      content: STRING,
      parent_id: INTEGER,
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
    return queryInterface.dropTable('PostComments');
  }
};
