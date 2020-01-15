import * as actionTypes from './actionTypes';

const authStart = () => ({
  type: actionTypes.AUTH_START
});

const authSuccess = (email, token, redirectPath) => ({
  type: actionTypes.AUTH_SUCCESS,
  email: email,
  token: token,
  redirectPath: redirectPath
});

const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  redirectPath: '/',
  error: error
});

export { authStart, authSuccess, authFail };
