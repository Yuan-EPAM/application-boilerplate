import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import InputItems from './InputItems';
import useStyles from './styles';
import { checkInputValidity } from './utility';

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
      valid: false,
      touched: false
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
      valid: false,
      touched: false
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
      valid: false,
      touched: false
    }
  };

  // const getStateObj = (items, itemType) => {
  //   const { value, validation, valid, touched } = items[itemType];
  //   return { value, validation, valid, touched };
  // };

  // const getFormStateObj = items => {
  //   const requiredItems = Object.values(items)
  //     .filter(item => item.validation.required)
  //     .map(item => {
  //       const { id, value, validation, touched } = item;
  //       return { id: { id, value, validation, touched } };
  //     });
  //   return requiredItems;
  // };

  // const [inputName, setInputName] = useState(getStateObj(items, 'name'));
  // const [inputEmail, setInputEmail] = useState(getStateObj(items, 'email'));
  // const [inputPwd, setInputPwd] = useState(getStateObj(items, 'pwd'));
  const [inputForm, setInputForm] = useState(items);

  // const updateStateObj = (preState, newValue, checkValidity) => ({
  //   ...preState,
  //   value: newValue,
  //   valid: checkValidity(newValue, preState.validation),
  //   touched: true
  // });

  // const handlerSetInputName = event => {
  //   let { value } = event.target;
  //   setInputName(preState => updateStateObj(preState, value, checkInputValidity));
  // };

  // const handlerSetInputEmail = event => {
  //   let { value } = event.target;
  //   setInputEmail(preState => updateStateObj(preState, value, checkInputValidity));
  // };

  // const handlerSetInputPwd = event => {
  //   let { value } = event.target;
  //   setInputPwd(preState => updateStateObj(preState, value, checkInputValidity));
  // };

  const handlerClick = () => {
    return console.log('sign up button clicked');
  };

  // const stateUtilityMap = {
  //   name: [inputName, handlerSetInputName],
  //   email: [inputEmail, handlerSetInputEmail],
  //   pwd: [inputPwd, handlerSetInputPwd]
  // };

  const updateFormStateObj = (preState, itemId, newValue, checkValidity) => {
    return {
      ...preState,
      [itemId]: {
        ...preState[itemId],
        value: newValue,
        valid: checkValidity(newValue, preState[itemId].validation),
        touched: true
      }
    };
  };

  const handlerSetInputForm = (event, itemId) => {
    // Return true only when bothrequired item are touched, valid and form is valid
    let { value } = event.target;
    setInputForm(preState => updateFormStateObj(preState, itemId, value, checkInputValidity));
  };

  const handlerOnSubmit = event => {
    event.preventDefault();
    alert('Signed up!');
  };

  return (
    <form className={classes.formArea} onSubmit={handlerOnSubmit}>
      {/* <InputItems items={items} stateUtilityMap={stateUtilityMap} /> */}
      <InputItems inputForm={inputForm} handlerSetInputForm={handlerSetInputForm} />

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
