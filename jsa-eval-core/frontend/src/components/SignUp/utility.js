
  const checkName = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /^([a-zA-Z0-9-_]){4,32}$/
    };
    return isValid && rules.pattern.test(value);
  };

  const checkEmail = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    };
    return isValid && rules.pattern.test(value);
  };

  const checkPwd = (value, valid) => {
    let isValid = valid;
    const rules = {
      pattern: /^[a-zA-Z0-9!@#$%\^&*()-_=.+]{6,18}$/
    };
    return isValid && rules.pattern.test(value);
  };

  const checkInputValidity = (value, validation) => {
    // default true, once triggered to false, then return false
    let isValid = true;
    if (validation.required) {
      const checkByType = {
        name: (value, isValid) => checkName(value, isValid),
        email: (value, isValid) => checkEmail(value, isValid),
        pwd: (value, isValid) => checkPwd(value, isValid)
      };
      // check input is an empty string
      isValid = typeof value === 'string' && value.trim() !== '' && isValid;
      isValid = checkByType[validation.type](value, isValid);
    } else {
      return true;
    }

    return isValid;
  };

  export { checkInputValidity };
