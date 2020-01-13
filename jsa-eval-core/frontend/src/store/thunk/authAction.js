import { authSuccess, authFail, signOut } from '../actions/auth';

const fetchData = async (url, authData, dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    dispatch(authFail(err.response.data.error));
  }
};

const auth = (email, pwd, isSignup) => {
  return async dispatch => {
    const authData = {
      email: email,
      pwd: pwd,
      hasToken: true
    };
    const baseURL = 'http://localhost:8080';
    const url = baseURL + (isSignup ? '/signin' : 'signup');
    const response = await fetchData(url, authData, dispatch);
  };
};

const authCheckState = () => {
  return dispatch => {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      signOut();
    } else {
      const userEmail = localStorage.getItem('email');
      dispatch(authSuccess(userEmail, userToken));
    }
  };
};

export { authCheckState };
