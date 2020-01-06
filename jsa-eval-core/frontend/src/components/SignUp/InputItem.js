import React from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import { AccountCircleOutlined, MailOutline, VisibilityOff } from '@material-ui/icons';

import useStyles from './styles';

const InputItem = ({ itemId, itemTYpe, placeholder, value, handlerOnChange }) => {
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

  return (
    <Input
      type={itemTYpe}
      className={classes.inputItem}
      startAdornment={getIcon(itemId)}
      placeholder={placeholder}
      value={value}
      onChange={handlerOnChange}
    />
  );
};

export default InputItem;
