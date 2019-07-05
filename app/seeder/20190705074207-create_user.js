'use strict';
const utils = require('utility');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      email: 'gkrole@test.com',
      password: utils.md5('123456'),
      inviter_id: 0,
      username: 'gkroleTest',
      weibo: 'xxx',
      weixin: 'xxx',
      receive_remote: 0,
      email_verifyed: 1,
      avatar: 'xxx.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
