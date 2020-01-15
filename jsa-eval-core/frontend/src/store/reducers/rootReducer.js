import { combineReducers } from 'redux';

import signupReducer from './signupReducer';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';
import signoutReducer from './signoutReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  signout: signoutReducer
});


export default rootReducer;
