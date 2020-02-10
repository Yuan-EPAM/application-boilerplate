import React, { useState } from 'react';
import { Input } from '@material-ui/core';

import useStyles from './styles';

import IconAdornment from '../IconAdornment';

const InputItem = ({ itemId, itemType, placeholder, inputValue, handlerSetFormItems }) => {
  const classes = useStyles();
  const [styleClasses, setStyleClasses] = useState(classes.inputItem);

  return (
    <div className={classes.inputItemArea}>
      <Input
        type={itemType}
        className={styleClasses}
        startAdornment={<IconAdornment itemId={itemId} />}
        placeholder={placeholder}
        value={inputValue}
        onChange={event => handlerSetFormItems(event, itemId)}
      />
    </div>
  );
};

export default InputItem;
