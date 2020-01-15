import React from 'react';
import { InputAdornment } from '@material-ui/core';
import { AccountCircleOutlined, MailOutline, VisibilityOff } from '@material-ui/icons';

const IconAdornment = ({itemId}) => {
  const addIcon = (position = 'start', iconComponent) => {
    return <InputAdornment position={position}>{iconComponent}</InputAdornment>;
  };

  const iconsMap = {
    name: addIcon('start', <AccountCircleOutlined />),
    email: addIcon('start', <MailOutline />),
    pwd: addIcon('start', <VisibilityOff />)
  };

  const getIcon = itemId => iconsMap[itemId];

  return getIcon(itemId);
}

export default IconAdornment;
