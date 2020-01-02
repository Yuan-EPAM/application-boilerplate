import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Input, InputAdornment, Button } from '@material-ui/core';
import { AccountCircleOutlined, MailOutline, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    border: '3px solid yellow',

    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
  inputArea: {
    border: '2px solid skyblue',
    display: 'flex',
    flexDirection: 'column'
  },
  inputItem: {
    border: '1px solid red',
    margin: 10
  },
  button: {
    margin: 10,
    width: '30%'
  }
}));

const addIcon = (position = 'start', iconComponent) => {
  return <InputAdornment position={position}>{iconComponent}</InputAdornment>;
};

const addInputItem = (item, placeholder, iconComponent) => {
  return;
};

const addInputItems = () => {};

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Card>
        <form className={classes.inputArea}>
          <Grid container>
            <Grid item xs={12} className={classes.inputItem}>
              <Input
                id="lastName"
                placeholder="Last Name"
                startAdornment={addIcon('start', <AccountCircleOutlined />)}
              />
              <Input
                id="firstName"
                placeholder="First Name"
                startAdornment={addIcon('start', <AccountCircleOutlined />)}
              />
            </Grid>
            {/* <Grid item xs={6}>
            </Grid> */}
            <Grid item xs={12}>
              <Input
                id="email"
                className={classes.inputItem}
                placeholder="Eamil Address"
                startAdornment={addIcon('start', <MailOutline />)}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                className={classes.inputItem}
                placeholder="Password"
                startAdornment={addIcon('start', <VisibilityOff />)}
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
