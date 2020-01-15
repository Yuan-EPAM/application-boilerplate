import React from 'react';
import { Container, Card } from '@material-ui/core';

// import FormArea from './FormArea';
import SignUpForm from '../../store/containers/SignUpForm'
import useStyles from './styles';

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Card>
        <SignUpForm />
      </Card>
    </Container>
  );
};

export default SignUp;
