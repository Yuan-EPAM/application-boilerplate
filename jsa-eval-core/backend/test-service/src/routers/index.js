const combineRouters = require('koa-combine-routers');

const signRouter = require('./sign');
const dashboardRouter = require('./dashboard');

const router = combineRouters(signRouter.routes(), dashboardRouter.routes());

module.exports = router;
