import * as actionTypes from './actionTypes';

const signout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  return {
    type: actionTypes.AUTH_SIGNOUT
  };
};

export { signout };
