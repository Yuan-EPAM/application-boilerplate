import { accessPageStart, accessPageSucess, accessPageFail } from '../actions/dashboard';

const getData = async (url, token) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + token
    }
  });
  return response;
};

const displayDashboard = (token) => {
  return async dispatch => {
    dispatch(accessPageStart());
    const url = 'http://localhost:8080/dashboard';
    try {
      const response = await getData(url, token);
      const result = await response.json();
      if (response.status === 200) {
        console.log('display result:', result);
        dispatch(accessPageSucess(true))
      } else {
        console.log('>>> response', response);
        dispatch(accessPageFail(false, result));
      }
    } catch (err) {
      throw Error(`fetch ${url} ERROR! : ${err}`);
    }
  };
};

export { displayDashboard };
