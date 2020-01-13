import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import InputItems from './InputItems';
import useStyles from './styles';
import { checkItemValidity, checkFormValidity } from './utility';

const FormArea = () => {
  const classes = useStyles();
  const history = useHistory();

  const formData = {
    items: {
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
    },
    valid: {
      checked: false,
      isFormValid: false,
      inValidItems: []
    }
  };

  const [formItems, setFormItems] = useState(formData);

  const updateItemStateObj = (preState, itemId, newValue, checkItemValidity) => {
    console.log('>>> updateItemStateObj', formItems.valid);

    return {
      ...preState.items,
      [itemId]: {
        ...preState.items[itemId],
        value: newValue,
        valid: checkItemValidity(newValue, preState.items[itemId].validation),
        touched: true
      }
    };
  };

  const handlerSetFormItems = (event, itemId) => {
    // Return true only when bothrequired item are touched, valid and form is valid
    let { value } = event.target;
    setFormItems(preState => ({
      ...preState,
      items: updateItemStateObj(preState, itemId, value, checkItemValidity)
    }));
  };

  const updateFormValid = (preState, items, checkFormValidity) => {
    const { isFormValid, inValidItems } = checkFormValidity(items);
    return {
      ...preState.valid,
      isFormValid: isFormValid,
      inValidItems: inValidItems,
      checked: true
    };
  };

  const handlerClick = () => {
    setFormItems(preState => ({
      ...preState,
      valid: updateFormValid(preState, formItems.items, checkFormValidity)
    }));

    console.log('sign up button clicked');
  };

  const postData = async (url, data) => {
    console.log(JSON.stringify(data));

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return res;
  };

  const getData = async (url) => {
    const res = await fetch(url, {
      method: 'GET'
    })
    console.log('>>> getData', res);
  }

  const handlerOnSubmit = async event => {
    event.preventDefault();
    if (formItems.valid.isFormValid) {
      alert('Signed up!');
      // history.push('/dashboard');


      let url = 'http://localhost:8080/signup';
      let signinURL = 'http://localhost:8080/signin';
      const { name, email, pwd } = formItems.items;

      const res = await postData(url, { userName: name.value, email: email.value, pwd: pwd.value });
      const { token } = res.text();
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email.value);
      console.log('>>> sign up response: ', res);

    } else {
      console.log('form valid', formItems.valid);
    }
  };

  return (
    <form className={classes.formArea} onSubmit={handlerOnSubmit}>
      <InputItems formItems={formItems} handlerSetFormItems={handlerSetFormItems} />

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
