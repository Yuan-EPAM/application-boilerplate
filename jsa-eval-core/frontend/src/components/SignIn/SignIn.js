import React from 'react';
import { Container, Card } from '@material-ui/core';

import FormArea from './FormArea';
import InputItems from '../InputItems';
import useStyles from './styles';

const SignIn = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Card>
        <FormArea />
      </Card>
    </Container>
  )
}

export default SignIn;
