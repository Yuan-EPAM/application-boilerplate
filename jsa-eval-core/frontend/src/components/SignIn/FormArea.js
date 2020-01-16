import React, { useState } from 'react';
import { Link, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import InputItems from './InputItems';
import ErrorInfo from '../ErrorInfo';
import useStyles from './styles';

import signinFormDataTemplate from './signinFormDataTemplate';

const FormArea = ({ error, onAuth }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formItems, setFormItems] = useState(signinFormDataTemplate);

  const updateItemStateObj = (preState, itemId, newValue) => {
    return {
      ...preState.items,
      [itemId]: {
        ...preState.items[itemId],
        value: newValue,
        touched: true
      }
    };
  };

  const handlerSetFormItems = (event, itemId) => {
    // Return true only when bothrequired item are touched, valid and form is valid
    let { value } = event.target;
    setFormItems(preState => ({
      ...preState,
      items: updateItemStateObj(preState, itemId, value)
    }));
  };

  const handlerSignUpClick = event => {
    event.preventDefault();
    history.push('/signup');
  };

  const handlerOnSubmit = event => {
    event.preventDefault();
    const { email, pwd } = formItems.items;
    onAuth(email.value, pwd.value, history);
  };

  return (
    <form className={classes.formArea} onSubmit={handlerOnSubmit}>
      <InputItems formItems={formItems} handlerSetFormItems={handlerSetFormItems} />

      <Link className={classes.signupLink} onClick={handlerSignUpClick}>
        Click here to sign up
      </Link>

      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="primary"
      >
        SIGN IN
      </Button>

      <ErrorInfo error={error} />
    </form>
  );
};

export default FormArea;
