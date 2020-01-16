const userService = require('../services/userService');
const encodeService = require('../services/encodeService');

const mapCols = data => ({
  name: data.username,
  email: data.email,
  password: data.pwd,
  hashedPwd: data.hashedPwd
});

const encodePwd = async data => ({ ...data, hashedPwd: await encodeService.hashPwd(data.pwd) });

const userInsert = async (ctx, next) => {
  await next();
  const data = ctx.request.body;
  if ('pwd' in data) {
    const newUser = await encodePwd(data);
    await userService.insertNewUser(mapCols(newUser));

    ctx.response.status = 201;
    ctx.body = JSON.stringify({ msg: 'Signed up Successfully!' });
  } else {
    ctx.response.status = 501;
    ctx.response.body = { error: 'ERROR: Failed to signed up!'};
  }
};

module.exports = { userInsert };
