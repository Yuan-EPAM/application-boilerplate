require('dotenv').config();
const jwt = require('jsonwebtoken');

const loginSchema = {
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
  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, { expiresIn: 15 });
  return token;
};

module.exports = { loginSchema, getJWT };
