const updateState = (oldState, newState) => ({ ...oldState, ...newState });

const getStateResult = (value, isValid, rules) => {
  return {
    isValid: isValid && rules.pattern.test(value),
    msg: rules.msg };
};
const checkName = (value, isValid) => {
  const rules = {
    pattern: /^([a-zA-Z0-9-_]){4,32}$/,
    msg: 'Name should have at least 4 characters'
  };

  return getStateResult(value, isValid, rules);
};

const checkEmail = (value, isValid) => {
  const rules = {
    pattern: /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    msg: 'Email should be valid'
  };

  return getStateResult(value, isValid, rules);
};

const checkPwd = (value, isValid) => {
  const rules = {
    pattern: /^[a-zA-Z0-9!@#$%\^&*()-_=.+]{6,18}$/,
    msg: 'Password should have at least 6 characters!'
  };

  return getStateResult(value, isValid, rules);
};

const checkEmpty = (value, itemState) => {
  let isValid = typeof value === 'string' && value.trim() !== '' && itemState.isValid;
  return updateState(itemState, { isValid: isValid });
};

const checkByItemType = (validationType, value, itemState) => {
  const checkType = {
    name: (value, isValid) => checkName(value, isValid),
    email: (value, isValid) => checkEmail(value, isValid),
    pwd: (value, isValid) => checkPwd(value, isValid)
  };

  const newValidState = checkType[validationType](value, itemState.isValid);
  return updateState(itemState, newValidState);
};

const checkItemValidity = (value, validation) => {
  // default true, once triggered to false, then return false
  let itemState = {
    isValid: true,
    msg: null
  };
  if (validation.required) {
    itemState = checkEmpty(value, itemState);
    itemState = checkByItemType(validation.type, value, itemState);
  } else {
    return itemState;
  }

  return itemState;
};

const checkFormValidity = items => {
  let isFormValid = false;

  const inValidItems = Object.values(items)
    .filter(item => !(item.validation.required && item.touched && item.validState.isValid))
    .map(({ id, validation, validState, touched }) => ({ id, validation, validState, touched }));

  isFormValid = inValidItems.length < 1;
  return { isFormValid, inValidItems };
};

export { checkItemValidity, checkFormValidity };
