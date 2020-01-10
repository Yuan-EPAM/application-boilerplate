const dbInit = require('./db-init.js');

const sequelize = dbInit.sequelize();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been establishes successfully');
  })
  .catch(err => {
    console.log('Unable to connect to the database', err);
  });
