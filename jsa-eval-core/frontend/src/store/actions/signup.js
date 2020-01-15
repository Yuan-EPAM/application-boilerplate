import * as actionTypes from './actionTypes';

const signupStart = () => ({
  type: actionTypes.SIGN_UP_START,
  error: null
});

const signupSuccess = (msg, redirectPath) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  redirectPath: redirectPath,
  msg: msg
});

const signupFail = (error, redicrectPath) => ({
  type: actionTypes.SIGN_UP_FAIL,
  redicrectPath: redicrectPath,
  error: error
});

const signupMsgClean = () => ({
  type: actionTypes.SIGN_UP_MSG_CLEAN,
  msg: null,
  error: null
});

export { signupStart, signupSuccess, signupFail, signupMsgClean };
