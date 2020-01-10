require('dotenv').config();
const Koa = require('koa');
const router = require('./koaRouter');

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.SERVER_PORT, () => {
  console.log('koa server running on port 8080');
});
