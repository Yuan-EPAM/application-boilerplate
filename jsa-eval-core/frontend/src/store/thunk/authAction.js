import { authStart, authSuccess, authFail } from '../actions/auth';
import { signout } from '../actions/signout';

const fetchData = async (url, authData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authData)
    });
    return response;
  } catch (err) {
    throw Error(`Error POST ${url}: ${err}`);
  }
};

const storeToken = (email, token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);
};

const auth = (email, pwd, history) => {
  return async dispatch => {
    dispatch(authStart());
    const signInData = {
      email: email,
      pwd: pwd
    };
    const url = process.env.REACT_APP_SERVER + process.env.REACT_APP_SIGNIN
    const response = await fetchData(url, signInData);
    const result = await response.json();
    if (response.status !== 200) {
      history.push('/signin');
      dispatch(authFail(result));
    } else {
      console.log('auth response', result);
      const { token } = result;
      const authedEmail = result.email;

      storeToken(authedEmail, token);
      history.push('/dashboard');
      dispatch(authSuccess(authedEmail, token, '/dashboard'));
    }
  };
};

const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      signout();
    } else {
      const email = localStorage.getItem('email');
      dispatch(authSuccess(email, token));
    }
  };
};

export { auth, authCheckState };
