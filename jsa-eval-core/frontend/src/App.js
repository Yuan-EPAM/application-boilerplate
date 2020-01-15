import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import DashboardContent from './store/containers/DashboardContent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin"/>
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          {/* <Dashboard /> */}
          <DashboardContent />
        </Route>
      </Switch>
    </Router>
  );
}

export default hot(App);
