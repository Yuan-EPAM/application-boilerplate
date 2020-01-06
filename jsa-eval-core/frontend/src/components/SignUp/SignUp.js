import React from 'react';
import { Container, Card } from '@material-ui/core';

import FormArea from './FormArea';
import useStyles from './styles';

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Card>
        <FormArea />
      </Card>
    </Container>
  );
};

export default SignUp;
