import React, { useState } from 'react';
import { Link, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import InputItems from '../InputItems/';
import useStyles from './styles';

const FormArea = () => {
  const classes = useStyles();
  const history = useHistory();

  const formData = {
    items: {
      email: {
        id: 'email',
        type: 'text',
        value: '',
        placeholder: 'Email Address'
      },
      pwd: {
        id: 'pwd',
        type: 'password',
        placeholder: 'Password',
        value: ''
      }
    }
  };

  const [formItems, setFormItems] = useState(formData);

  const updateItemStateObj = (preState, itemId, newValue) => {
    console.log('>>> updateItemStateObj', formItems.valid);

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

  const handlerClick = () => {
    setFormItems(preState => ({
      ...preState
    }));

    console.log('sign up button clicked');
  };

  const handlerSignUpClick = event => {
    event.preventDefault();
    history.push('/signup');
  };

  return (
    <form className={classes.FormArea}>
      <InputItems formItems={formItems} handlerSetFormItems={handlerSetFormItems} />

      <Link className={classes.signupLink} onClick={handlerSignUpClick}>
        New user? Please sign up
      </Link>

      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handlerClick}
      >
        SIGN IN
      </Button>
    </form>
  );
};

export default FormArea;
