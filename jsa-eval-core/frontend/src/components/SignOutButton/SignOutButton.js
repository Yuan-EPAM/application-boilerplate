import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SignOutButton = ({ onSignout }) => {
  const history = useHistory();

  const handlerSignOutButton = event => {
    event.preventDefault();
    onSignout();
    history.push('/signin');
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handlerSignOutButton}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
