import React from 'react';
import { Container, Card } from '@material-ui/core';

// import FormArea from './FormArea';
import useStyles from './styles';

import SignInForm from '../../store/containers/SignInForm'

const SignIn = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Card>
        <SignInForm />
      </Card>
    </Container>
  )
}

export default SignIn;
