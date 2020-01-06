import React, { useState, useCallback } from 'react';
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
      placeholder: 'User Name',
      validation: {
        type: 'name',
        required: true
      },
      valid: false
    },
    email: {
      id: 'email',
      type: 'text',
      value: '',
      placeholder: 'Email Address',
      validation: {
        type: 'email',
        required: true
      },
      valid: false
    },
    pwd: {
      id: 'pwd',
      type: 'password',
      value: '',
      placeholder: 'Password',
      validation: {
        type: 'password',
        required: true
      },
      valid: false
    }
  };

  const [inputName, setInputName] = useState({
    value: items.name.value,
    validation: items.name.validation,
    valid: items.name.valid
  });
  const [inputEmail, setInputEmail] = useState({
    value: items.email.value,
    validation: items.email.validation,
    valid: items.email.valid
  });
  const [inputPwd, setInputPwd] = useState(items.pwd.value);

  const checkName = (value, valid) => {
    let isValid = valid;
    const rules = {
      minLength: 4,
      maxLength: 32
    };
    return isValid && value.length >= rules.minLength && value.length <= rules.maxLength;
  };

  const checkEmail = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    };
    console.log(rules.pattern.test(value));
    return isValid && rules.pattern.test(value);
    // return true;
  };

  const checkInputValidity = (value, validation) => {
    let isValid = true;
    if (validation.required) {
      // default true, once triggered to false, then return false
      // check input is an empty string
      isValid = typeof value && value.trim() !== '' && isValid;

      switch (validation.type) {
        case 'name':
          isValid = checkName(value, isValid);
          break;
        case 'email':
          isValid = checkEmail(value, isValid);
          break;
        default:
          isValid = true;
      }
    } else {
      return true;
    }

    return isValid;
  };


  const handlerSetInputName = event => {
    let { value } = event.target;

    setInputName(preState => ({
      ...preState,
      value: value,
      valid: checkInputValidity(value, preState.validation)
    }));
  };

  const handlerSetInputEmail = event => {
    let { value } = event.target;

    setInputEmail(preState => ({
      ...preState,
      value: value,
      valid: checkInputValidity(value, preState.validation)
    }));
  };
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
