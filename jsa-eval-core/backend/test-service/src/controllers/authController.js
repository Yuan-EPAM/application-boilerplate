const authService = require('../services/authService');
const userService = require('../services/userService');

const isTrueError = (ctx, errors) => {
  ctx.body = errors;
  ctx.status = 400;
};

const checkValidity = async ctx => {
  console.log('ctx body', ctx.request.body);
  ctx.checkBody(authService.loginSchema);
  const errors = await ctx.validationErrors();
  console.log('validation error', errors);
  return errors;
};

const findByEmail = async ctx => {
  const { email } = ctx.request.body;
  const user = await userService.getUserByEmail(email);
  return user;
};

const notFound = ctx => {
  const response = {
    error: 'Email is not found!'
  };
  ctx.status = 401;
  ctx.body = JSON.stringify(response);
};

const createJWT = (ctx, user) => {
  const token = authService.getJWT(user.email);
  // console.log(`>>> getJWT for email: ${user.email} token: ${token}`);

  ctx.response.status = 200;
  ctx.response.body = JSON.stringify({ token, msg: 'Singed in successfully!' });
};

const signInAuth = async ctx => {
  const errors = await checkValidity(ctx);
  const user = errors ? isTrueError(ctx, errors) : await findByEmail(ctx);

  return user.length < 1 ? notFound(ctx) : createJWT(ctx, user);
};

module.exports = { signInAuth };
