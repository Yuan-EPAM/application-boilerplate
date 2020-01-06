import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import InputItems from './InputItems';

import useStyles from './styles';

const FormArea = () => {
  const classes = useStyles();

  const items = {
    name: {
      id: 'name',
      type: 'text',
      value: '',
      placeholder: 'User Name'
    },
    email: {
      id: 'email',
      type: 'text',
      value: '',
      placeholder: 'Email Address'
    },
    pwd: {
      id: 'pwd',
      type: 'password',
      value: '',
      placeholder: 'Password'
    }
  };

  const [inputName, setInputName] = useState(items.name.value);
  const [inputEmail, setInputEmail] = useState(items.email.value);
  const [inputPwd, setInputPwd] = useState(items.pwd.value);

  const handlerSetInputName = event => setInputName(event.target.value);
  const handlerSetInputEmail = event => setInputEmail(event.target.value);
  const handlerSetInputPwd = event => setInputPwd(event.target.value);

  const handlerClick = () => {
    return console.log('sign up button clicked');
  };

  const stateMap = {
    name: [inputName, handlerSetInputName],
    email: [inputEmail, handlerSetInputEmail],
    pwd: [inputPwd, handlerSetInputPwd]
  };

  return (
    <form className={classes.formArea}>
      <InputItems items={items} stateMap={stateMap} />
      <Button className={classes.button} variant="contained" color="primary" onClick={handlerClick}>
        SIGN UP
      </Button>
    </form>
  );
};

export default FormArea;
