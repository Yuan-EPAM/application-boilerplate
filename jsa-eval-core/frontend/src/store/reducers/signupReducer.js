import * as actionTypes from '../actions/actionTypes';

const initialState = {
  redirectPath: '/signup',
  msg: null,
  error: null
};

const updateObj = (oldState, newState) => ({ ...oldState, ...newState });

const signupStart = (state, action) => updateObj(state, { msg: null, error: null });

const signupSuccess = (state, action) =>
  updateObj(state, {
    redirectPath: action.redirectPath,
    msg: action.msg,
    error: null
  });

const signupFail = (state, action) =>
  updateObj(state, {
    redirectPath: action.redirectPath,
    error: action.error
  });

const signupMsgClean = (state, action) =>
  updateObj(state, {
    msg: null,
    error: null
  });

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_START:
      return signupStart(state, action);
    case actionTypes.SIGN_UP_SUCCESS:
      return signupSuccess(state, action);
    case actionTypes.SIGN_UP_FAIL:
      return signupFail(state, action);
    case actionTypes.SIGN_UP_MSG_CLEAN:
      return signupMsgClean(state, action);
    default:
      return state;
  }
};

export default signupReducer;
