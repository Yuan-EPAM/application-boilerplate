require('dotenv').config();

// console.log(require('dotenv').config());

module.exports = {
  development: {
    dialect: 'mysql',
    seederStorage: 'sequelize',
    url: process.env.DB_URI,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }
};
