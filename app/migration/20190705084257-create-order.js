'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE, FLOAT, TINYINT }) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      order_id: STRING(48),
      user_id: INTEGER,
      price: FLOAT,
      state: TINYINT,
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
    return queryInterface.dropTable('Orders');
  }
};
