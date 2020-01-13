const bcrypt = require('bcrypt');

const hashPwd = async (pwd, saltRound = 10) => {
  const hash = await bcrypt.hash(pwd, saltRound);
  return hash;
};

const verifyPwd = async (pwd, hash) => {
  const result = await bcrypt.compare(pwd, hash);
  return result;
};

module.exports = { hashPwd, verifyPwd };
