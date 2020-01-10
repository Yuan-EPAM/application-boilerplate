require('dotenv').config({ path: '../../.env' });
const Sequelize = require('sequelize');

console.log('>>> DB_URI', process.env.SERVER_PORT);

const sequelize = new Sequelize(process.env.DB_URI);

module.exports = { sequelize: () => sequelize, DataTypes: () => Sequelize.DataTypes };
