import { signupStart, signupSuccess, signupFail } from '../actions/signup';

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response;
  } catch (err) {
    throw Error(`Error POST ${url}: ${err}`);
  }
}

const signup = (name, email, pwd, history) => {
  return async dispatch => {
    dispatch(signupStart());
    const signupData = {
      username: name,
      email: email,
      pwd: pwd
    }
    const url = process.env.REACT_APP_SERVER + process.env.REACT_APP_SIGNUP
    const response = await postData(url, signupData);
    const result = await response.json();
    if (response.status === 201) {
      dispatch(signupSuccess(result.msg, '/signin'));
      history.push('/signin');
    } else {
      dispatch(signupFail(result.error, '/signup'));
      }
    }
 }

 export { signup };

