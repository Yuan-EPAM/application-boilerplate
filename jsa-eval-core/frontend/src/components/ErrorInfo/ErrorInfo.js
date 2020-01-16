import React from 'react';

import useStyles from './styles';

const ErrorInfo = ({ error }) => {
  const classes = useStyles();

  const handlerErrorInfo = error => {
    return error ? error.error : '';
  };

  return <p className={classes.error}>{handlerErrorInfo(error)}</p>;
};

export default ErrorInfo;
