import * as actionTypes from '../actions/actionTypes';

const initalState = {
  isAuth: false,
  error: null
};

const updateObj = (oldState, newState) => ({ ...oldState, ...newState });

const accessPageStart = (state, action) => updateObj(state, { error: null });

const accessPageSuccess = (state, action) =>
  updateObj(state, { isAuth: action.isAuth, error: null });

const accessPageFail = (state, action) =>
  updateObj(state, { isAuth: action.isAuth, error: action.error });

const dashboardReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ACCESS_PAGE_START:
      return accessPageStart(state, action);
    case actionTypes.ACCESS_PAGE_SUCCESS:
      return accessPageSuccess(state, action);
    case actionTypes.ACCESS_PAGE_FAIL:
      return accessPageFail(state, action);
    default:
      return state;
  }
};

export default dashboardReducer;
