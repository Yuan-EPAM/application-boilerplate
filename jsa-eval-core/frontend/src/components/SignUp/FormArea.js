import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import InputItems from './InputItems';

import useStyles from './styles';

const FormArea = () => {
  const classes = useStyles();

  const items = {
    name: {
      id: 'name',
      type: 'text',
      placeholder: 'User Name',
      value: '',
      validation: {
        type: 'name',
        required: true
      },
      valid: false
    },
    email: {
      id: 'email',
      type: 'text',
      placeholder: 'Email Address',
      value: '',
      validation: {
        type: 'email',
        required: true
      },
      valid: false
    },
    pwd: {
      id: 'pwd',
      type: 'password',
      placeholder: 'Password',
      value: '',
      validation: {
        type: 'pwd',
        required: true
      },
      valid: false
    }
  };

  const getStateObj = (items, itemType) => {
    const { value, validation, valid } = items[itemType];
    return { value, validation, valid };
  };

  const [inputName, setInputName] = useState(getStateObj(items, 'name'));
  const [inputEmail, setInputEmail] = useState(getStateObj(items, 'email'));
  const [inputPwd, setInputPwd] = useState(getStateObj(items, 'pwd'));

  const checkName = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /^([a-zA-Z0-9-_]){4,32}$/
    };
    return isValid && rules.pattern.test(value);
  };

  const checkEmail = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    };
    return isValid && rules.pattern.test(value);
  };

  const checkPwd = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /^[a-zA-Z0-9!@#$%\^&*()-_=.+]{6,18}$/
    };
    return isValid && rules.pattern.test(value);
  };

  const checkInputValidity = (value, validation) => {
    // default true, once triggered to false, then return false
    let isValid = true;
    if (validation.required) {
      const checkByType = {
        name: (value, isValid) => checkName(value, isValid),
        email: (value, isValid) => checkEmail(value, isValid),
        pwd: (value, isValid) => checkPwd(value, isValid)
      };
      // check input is an empty string
      isValid = typeof value === 'string' && value.trim() !== '' && isValid;
      isValid = checkByType[validation.type](value, isValid);
    } else {
      return true;
    }

    return isValid;
  };

  const updateStateObj = (preState, newValue, checkValidity) => ({
    ...preState,
    value: newValue,
    valid: checkValidity(newValue, preState.validation)
  });

  const handlerSetInputName = event => {
    let { value } = event.target;
    setInputName(preState => updateStateObj(preState, value, checkInputValidity));
  };

  const handlerSetInputEmail = event => {
    let { value } = event.target;
    setInputEmail(preState => updateStateObj(preState, value, checkInputValidity));
  };

  const handlerSetInputPwd = event => {
    let { value } = event.target;
    setInputPwd(preState => updateStateObj(preState, value, checkInputValidity));
  };

  const handlerClick = () => {
    return console.log('sign up button clicked');
  };

  const stateUtilityMap = {
    name: [inputName, handlerSetInputName],
    email: [inputEmail, handlerSetInputEmail],
    pwd: [inputPwd, handlerSetInputPwd]
  };

  const handlerOnSubmit = event => {
    event.preventDefault();
    alert('Signed up!');
  };

  return (
    <form className={classes.formArea} onSubmit={handlerOnSubmit} >
      <InputItems items={items} stateUtilityMap={stateUtilityMap} />

      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handlerClick}
      >
        SIGN UP
      </Button>
    </form>
  );
};

export default FormArea;
