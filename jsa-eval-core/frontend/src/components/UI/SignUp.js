import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Input, InputAdornment, Button } from '@material-ui/core';
import { MailOutline, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    height: 500
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1)
  },
  button: {
    margin: 10,
    width: '30%'
  }
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Card>
        <form className={classes.input}>
          <Grid container>
            <Grid item xs={6}>
              <Input id="lastName" placeholder="Last Name" />
            </Grid>
            <Grid item xs={6}>
              <Input id="firstName" placeholder="First Name" />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="email"
                placeholder="Eamil Address"
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <VisibilityOff />
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Button className={classes.button} variant="contained" color="primary">
            SIGN UP
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default SignUp;
