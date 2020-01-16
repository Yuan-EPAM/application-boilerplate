const authService = require('../services/authService');
const userService = require('../services/userService');
const encodeService = require('../services/encodeService');

const checkValidity = async ctx => {
  ctx.checkBody(authService.signinSchema);
  const errors = await ctx.validationErrors();
  console.log('validation error', errors);
  return errors ? { error: errors[0].param + ': ' +  errors[0].msg } : errors;
};

const isTrueError = (ctx, errors) => {
  ctx.body = JSON.stringify(errors);
  ctx.status = 400;
};

const findByEmail = async email => {
  // const { email } = ctx.request.body;
  const user = await userService.getUserByEmail(email);
  return user;
};

const comparePwd = async (pwdToCheck, hashedPwd) => {
  const match = await encodeService.verifyPwd(pwdToCheck, hashedPwd);
  console.log('>>> Match Resut checkPwdByEmail', match);
  return match;
};

const notFoundEmail = ctx => {
  const response = {
    error: 'Email NOT FOUND!'
  };
  ctx.status = 401;
  ctx.body = JSON.stringify(response);
};

const notMatchPwd = ctx => {
  const response = {
    error: 'Password NOT MATCH!'
  };
  ctx.status = 401;
  ctx.body = JSON.stringify(response);
};

const allocateJWT = (ctx, user) => {
  const token = authService.getJWT(user.email);
  // console.log(`>>> getJWT for email: ${user.email} token: ${token}`);
  const { email } = user;
  ctx.response.status = 200;
  ctx.response.body = JSON.stringify({ email, token, msg: 'Singed in successfully!' });
};

const signInAuth = async ctx => {
  // check email, pwd and allocate a token
  const errors = await checkValidity(ctx);

  if (errors) {
    isTrueError(ctx, errors);
  } else {
    const { email, pwd } = ctx.request.body;
    const user = await findByEmail(email);
    if (!user) {
      notFoundEmail(ctx);
    } else {
      const { hashedPwd } = user;
      const match = await comparePwd(pwd, hashedPwd);
      match === false ? notMatchPwd(ctx) : allocateJWT(ctx, user);
    }
  }
};

module.exports = { signInAuth };
