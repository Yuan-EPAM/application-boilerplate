import React from 'react';
import { Grid } from '@material-ui/core';

import InputItem from './InputItem';

const InputItems = ({ formItems, handlerSetFormItems }) =>
  Object.values(formItems.items).map(item => {
    // console.log('>>> Sign up item:', { id: item.id, value: item.value, validState: item.validState });
    console.log('>>> Sign up item:', {
      id: item.id,
      value: item.value,
      isValid: item.validState.isValid,
      msg: item.validState.msg
    });

    return (
      <Grid item sm={12} key={item.id}>
        <InputItem
          itemId={item.id}
          itemType={item.type}
          placeholder={item.placeholder}
          inputValue={item.value}
          handlerSetFormItems={handlerSetFormItems}
          validState={item.validState}
          touched={item.touched}
          checked={formItems.valid.checked}
          validation={item.validation}
        />
      </Grid>
    );
  });

export default InputItems;
