import * as actionTypes from '../actions/actionTypes';

const initialState = {
  email: null,
  token: null,
  redirectPath: '/'
}

const updateObj = (oldState, newState) => ({...oldState, ...newState});

const authSignOut = (state, action) => updateObj(state, {token: null, email: null})

const signoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGNOUT: return authSignOut(state, action);
    default: return state;
  }
}

export default signoutReducer;
