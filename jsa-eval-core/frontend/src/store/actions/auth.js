import * as actionTypes from './actionTypes';

const authStart = () => ({
  type: actionTypes.AUTH_START
});

const authSuccess = (email, token) => ({
  type: actionTypes.AUTH_SUCCESS,
  email: email,
  token: token
});

const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error: error
});

const signOut = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  return {
    type: actionTypes.AUTH_SIGNOUT
  };
};

export { authStart, authSuccess, authFail, signOut };
