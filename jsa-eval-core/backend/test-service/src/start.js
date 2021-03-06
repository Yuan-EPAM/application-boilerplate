require('dotenv').config({ path: '../.env' });
const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const koaValidator = require('koa-async-validator');

const signRouter = require('./routers/sign');
const dashboardRouter = require('./routers/dashboard');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(koaValidator());

app.use(signRouter.routes()).use(signRouter.allowedMethods());
app.use(dashboardRouter.routes()).use(dashboardRouter.allowedMethods());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`koa server running on port ${process.env.SERVER_PORT}`);
});
