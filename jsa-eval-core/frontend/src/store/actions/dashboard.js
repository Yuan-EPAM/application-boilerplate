import * as actionTypes from './actionTypes';

const accessPageStart = () => ({
  type: actionTypes.ACCESS_PAGE_START
});

const accessPageSucess = (isAuth) => ({
  type: actionTypes.ACCESS_PAGE_SUCCESS,
  isAuth: isAuth
});

const accessPageFail = (isAuth, error) => ({
  type: actionTypes.ACCESS_PAGE_FAIL,
  isAuth: isAuth,
  error: error
})

export { accessPageStart, accessPageSucess, accessPageFail }
