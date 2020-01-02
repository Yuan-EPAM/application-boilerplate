import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const SignUp = () => {
  return (
    <form>
      <TextField label="Email Address" />
      <TextField label="User Name" />
      <TextField label="Password" />
    </form>
  );
};

export default SignUp;
