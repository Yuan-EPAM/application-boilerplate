import React, { useState, useEffect, useCallback } from 'react';
import { Input } from '@material-ui/core';

import useStyles from './styles';

import IconAdornment from '../IconAdornment';
import ErrorInfo from '../ErrorInfo';

const InputItem = ({
  itemId,
  itemType,
  placeholder,
  inputValue,
  handlerSetFormItems,
  validState,
  touched,
  checked
}) => {
  const classes = useStyles();
  const [styleClasses, setStyleClasses] = useState(classes.inputItem);
  const [itemOutFocus, setItemOutFocus] = useState(false);

  const warnInvalid = useCallback(() => {
    !validState.isValid
      ? setStyleClasses(classes.inputItemInvalid)
      : setStyleClasses(classes.inputItem);
  }, [validState, classes.inputItem, classes.inputItemInvalid]);

  const handlerSetItemOutFocus = () => {
    setItemOutFocus(true);
  };

  const checkValid = event => {
    event.preventDefault();
    warnInvalid();
    handlerSetItemOutFocus();
  };

  const showErrorMsg = validState => {
    if (itemOutFocus && !validState.isValid) {
      return <ErrorInfo error={{ error: validState.msg }} />;
    }
  };

  useEffect(() => {
    if ((checked && !touched) || validState.isValid) {
      warnInvalid();
    }
  }, [touched, checked, warnInvalid, validState.isValid]);

  return (
    <div className={classes.inputItemArea}>
      <Input
        type={itemType}
        className={styleClasses}
        startAdornment={<IconAdornment itemId={itemId} />}
        placeholder={placeholder}
        value={inputValue}
        onChange={event => handlerSetFormItems(event, itemId)}
        onBlur={event => checkValid(event, itemId)}
      />

      {showErrorMsg(validState)}
    </div>
  );
};

export default InputItem;
