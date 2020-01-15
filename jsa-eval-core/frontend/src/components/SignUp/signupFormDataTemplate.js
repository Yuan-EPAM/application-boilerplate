const signupFormDataTemplate = {
  items: {
    name: {
      id: 'name',
      type: 'text',
      placeholder: 'User Name',
      value: '',
      validation: {
        type: 'name',
        required: true
      },
      validState: {
        isValid: false
      },
      touched: false
    },
    email: {
      id: 'email',
      type: 'text',
      placeholder: 'Email Address',
      value: '',
      validation: {
        type: 'email',
        required: true
      },
      validState: {
        isValid: false
      },
      touched: false
    },
    pwd: {
      id: 'pwd',
      type: 'password',
      placeholder: 'Password',
      value: '',
      validation: {
        type: 'pwd',
        required: true
      },
      validState: {
        isValid: false
      },
      touched: false
    }
  },
  valid: {
    checked: false,
    isFormValid: false,
    inValidItems: []
  }
};

export default signupFormDataTemplate;
