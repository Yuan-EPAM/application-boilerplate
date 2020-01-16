import React, { useState, useEffect } from 'react';
import { Link, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import InputItems from './InputItems';
import useStyles from './styles';
import { checkItemValidity, checkFormValidity } from './utility';

import signupFormDataTemplate from './signupFormDataTemplate';

const FormArea = ({ signupMsg, error, onSignup, onCleanMsg }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formItems, setFormItems] = useState(signupFormDataTemplate);

  useEffect(() => {
    const msgAlert = signupMsg || error;
    if (msgAlert) {
      alert(msgAlert);
      onCleanMsg();
    }
  }, [signupMsg, error, onCleanMsg]);

  const updateItemStateObj = (preState, itemId, newValue, checkItemValidity) => {
    return {
      ...preState.items,
      [itemId]: {
        ...preState.items[itemId],
        value: newValue,
        validState: checkItemValidity(newValue, preState.items[itemId].validation),
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

  const handlerSignUpClick = event => {
    event.preventDefault();
    console.log('env variable:', process.env);
    history.push('/signin');
  };

  const handlerClick = () => {
    setFormItems(preState => ({
      ...preState,
      valid: updateFormValid(preState, formItems.items, checkFormValidity)
    }));
  };

  const handlerOnSubmit = event => {
    event.preventDefault();

    if (formItems.valid.isFormValid) {
      const { name, email, pwd } = formItems.items;
      onSignup(name.value, email.value, pwd.value, history);
    } else {
      alert('Input Invalid!')
    }
  };

  return (
    <form className={classes.formArea} onSubmit={handlerOnSubmit}>
      <InputItems formItems={formItems} handlerSetFormItems={handlerSetFormItems} />

      <Link className={classes.signinLink} onClick={handlerSignUpClick}>
        Click here to sign in
      </Link>

      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handlerClick}
      >
        SIGN UP
      </Button>
    </form>
  );
};

export default FormArea;
