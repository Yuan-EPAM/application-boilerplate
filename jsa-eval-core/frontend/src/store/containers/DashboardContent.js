import React, { useEffect } from 'react';
import Dashboard from '../../components/Dashboard';
import { connect } from 'react-redux';

import { displayDashboard } from '../thunk/dashboardAction';

const DashboardContent = ({ isAuth, error, displayContent }) => {
  const retrieveToken = () => {
    return localStorage.getItem('token');
  };

  const noAuthPage = () => <p>ERROR: Permission denied! Currently you are not allowed to access this page! Please contact admin</p>;

  const showPage = () => <Dashboard />;

  const safeAuthCheck = isAuth => {
    return isAuth ? showPage() : noAuthPage();
  };

  useEffect(() => {
    const token = retrieveToken();
    displayContent(token);
  }, [isAuth, displayContent]);

  return safeAuthCheck(isAuth);
};

const mapStateToProps = ({ dashboard }) => {
  return {
    isAuth: dashboard.isAuth,
    error: dashboard.error
  };
};

const mapDispathToProps = dispatch => {
  console.log('>>>> DashboardContent mapProps', dispatch);
  return {
    displayContent: token => dispatch(displayDashboard(token))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(DashboardContent);
