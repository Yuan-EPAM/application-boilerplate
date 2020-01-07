import React from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import { AccountCircleOutlined, MailOutline, VisibilityOff } from '@material-ui/icons';

import useStyles from './styles';

const InputItem = ({ itemId, itemType, placeholder, inputValue, handlerOnChange }) => {
  const classes = useStyles();

  const addIcon = (position = 'start', iconComponent) => {
    return <InputAdornment position={position}>{iconComponent}</InputAdornment>;
  };

  const iconsMap = {
    name: addIcon('start', <AccountCircleOutlined />),
    email: addIcon('start', <MailOutline />),
    pwd: addIcon('start', <VisibilityOff />)
  };

  const getIcon = itemId => iconsMap[itemId];

  // console.log('props:', itemId, inputValue)

  return (
    <Input
      type={itemType}
      className={classes.inputItem}
      startAdornment={getIcon(itemId)}
      placeholder={placeholder}
      value={inputValue.value}
      onChange={(event) => handlerOnChange(event, itemId)}
    />
  );
};

export default InputItem;
