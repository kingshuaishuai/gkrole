/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561355499342_7671';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // add sequelize config
  config.sequelize = {
    dialect: 'mysql',
    database: 'gkrole',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'shuai2326'
  }

  return {
    ...config,
    ...userConfig,
  };
};
