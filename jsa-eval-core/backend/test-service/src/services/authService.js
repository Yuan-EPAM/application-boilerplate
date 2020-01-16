require('dotenv').config();
const jwt = require('jsonwebtoken');

const signinSchema = {
  email: {
    notEmpty: true,
    isEmail: {
      errorMessage: 'Invalid Email'
    }
  },
  pwd: {
    notEmpty: true,
    isLength: {
      options: [{ min: 6, max: 18 }]
    },
    errorMessage: 'Must be between 6 and 18 chars long'
  }
};

const getJWT = email => {
  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, { expiresIn: 60 * 15 });
  return token;
};

const handleJWTError = (error, decoded) => {
  if (error) {
    return {
      ...error,
      JWTstatus: 401
    };
  } else {
    return { ...decoded, JWTstatus: 200 };
  }
};

const verifyJWT = token => {
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET, handleJWTError);
    return result
  } catch (err) {
    throw Error('Verify JWT TOKEN ERROR!:');
  }
};

// can refactor to functional chain ?
const authCases = {
  hasAuthProperty: ctx => 'authorization' in ctx.headers,
  withBearAuth: ctx => ctx.headers.authorization.startsWith('Bearer')
  // withToken: ctx => ctx.headers.authorization.includes('token')
};

const checkHeaderValidity = ctx => {
  return authCases.hasAuthProperty(ctx) && authCases.withBearAuth(ctx);
};

module.exports = { signinSchema, getJWT, verifyJWT, checkHeaderValidity };
