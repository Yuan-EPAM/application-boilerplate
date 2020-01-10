const Router = require('koa-router');

const mockData = require('./data/mockData');

const router = new Router();

router.get('/jsa', ctx => {
  console.log('getting data ');
  ctx.body = mockData;
});

module.exports = router;
