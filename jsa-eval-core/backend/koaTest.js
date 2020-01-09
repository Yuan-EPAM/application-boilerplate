const Koa = require('koa');

const app = new Koa();

app.use(async function (ctx, next) {
  console.log('>> one');
  await next();
  console.log('<<<<<<< one');
});

app.use(async function(ctx, next) {
 console.log('>> two');
 ctx.body = 'two';
//  await next();
 console.log('<<<<<<<< two');
});

app.use(async function (ctx, next) {
  console.log('>> three');
  await next();
  console.log('<<<<<<< three');
});

app.listen(8080, () => {
  console.log('Koa server running on port 8080');
});
