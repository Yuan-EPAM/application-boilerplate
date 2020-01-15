import React from 'react';

import dashboardDemo from '../../dashboard-demo.gif';
import SignOutButton from '../../store/containers/SignOut';

const Dashboard = () => {

  return (
    <section>
      <div>
        <p>Welcome to dashboard area~</p>
        <img src={dashboardDemo} alt="funny cat gif" />
      </div>

      <SignOutButton />
    </section>
  );
};

export default Dashboard;
