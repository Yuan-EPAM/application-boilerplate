const Router = require('koa-router');
const dashboard = new Router();

const dashboardController = require('../controllers/dashboardController');

dashboard.get('/dashboard', dashboardController.checkAuth);

module.exports = dashboard;

