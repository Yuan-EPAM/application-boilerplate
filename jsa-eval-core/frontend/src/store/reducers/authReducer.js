import * as actionTypes from '../actions/actionTypes';

const initalState = {
  email: null,
  token: null,
  redirectPath: '/',
  error: null
}

const updateObj = (oldState, newState) => ({...oldState, ...newState});

const authStart = (state, action) => updateObj( state, { error: null} );

const authSuccess = (state, action) => updateObj( state, {
  email: action.email,
  token: action.token,
  redirectPath: action.redirectPath,
  error: null
})

const authFail = (state, action) => updateObj( state, {
  error: action.error,
  redirectPath: action.redirectPath
})

const authReducer = ( state = initalState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    default:
      return state;
  }
}

export default authReducer;
