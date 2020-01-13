import React, { useState, useEffect, useCallback } from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import { AccountCircleOutlined, MailOutline, VisibilityOff } from '@material-ui/icons';

import useStyles from './styles';

const InputItem = ({
  itemId,
  itemType,
  placeholder,
  inputValue,
  handlerSetFormItems,
  valid,
  checked
}) => {
  const classes = useStyles();
  const [styleClasses, setStyleClasses] = useState(classes.inputItem);

  const addIcon = (position = 'start', iconComponent) => {
    return <InputAdornment position={position}>{iconComponent}</InputAdornment>;
  };

  const iconsMap = {
    name: addIcon('start', <AccountCircleOutlined />),
    email: addIcon('start', <MailOutline />),
    pwd: addIcon('start', <VisibilityOff />)
  };

  const getIcon = itemId => iconsMap[itemId];

  const warnInvalid = useCallback(() => {
    checked && !valid ? setStyleClasses(classes.inputItemInvalid) : setStyleClasses(classes.inputItem)
  }, [checked, valid, classes.inputItem, classes.inputItemInvalid])

  useEffect(() => {
    warnInvalid()
  }, [warnInvalid])

  return (
    <Input
      type={itemType}
      className={styleClasses}
      startAdornment={getIcon(itemId)}
      placeholder={placeholder}
      value={inputValue}
      onChange={event => handlerSetFormItems(event, itemId)}
    />
  );
};

export default InputItem;
