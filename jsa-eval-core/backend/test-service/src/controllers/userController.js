const userService = require('../services/userService');
const encodeService = require('../services/encodeService');

const mapCols = data => ({
  // based frontend form (see fronted/componets/SignUp/formArea)
  firstName: data.firstName || 'v',
  lastName: data.lastName || data.userName,
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

    ctx.response.status = 200;
    ctx.body = JSON.stringify(newUser);
  }
};

module.exports = { userInsert };
