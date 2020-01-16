const authService = require('../services/authService');

const noAuth = (ctx, error) => {
  ctx.status = 403;
  ctx.body = JSON.stringify(error);
};

const authGranted = ctx => {
  ctx.status = 200;
  ctx.body = JSON.stringify('Welcome to dashboard!');
};

const extractHeaderToken = ctx => {
  return ctx.headers.authorization.split(' ')[1];
};

const checkAuth = async ctx => {
  const isHeaderValid = authService.checkHeaderValidity(ctx);
  if (!isHeaderValid) {
    // ctx.throw(403, 'No token');
    noAuth(ctx, { error: 'Permission Denied!' });
  } else {
    const token = extractHeaderToken(ctx);
    const result = authService.verifyJWT(token);
    if (result.JWTstatus === 200) {
      authGranted(ctx);
    } else {
      noAuth(ctx, result);
    }
  }
};

module.exports = { checkAuth };
