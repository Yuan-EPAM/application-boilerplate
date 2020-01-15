import React from 'react';
import { Grid } from '@material-ui/core';

import InputItem from './InputItem';

const InputItems = ({ formItems, handlerSetFormItems }) =>
  Object.values(formItems.items).map(item => {
    console.log('>>> Sign in item:', { id: item.id, value: item.value });

    return (
      <Grid item xs={12} key={item.id}>
        <InputItem
          itemId={item.id}
          itemType={item.type}
          placeholder={item.placeholder}
          inputValue={item.value}
          handlerSetFormItems={handlerSetFormItems}
          valid={item.valid}
          // checked={false || formItems.valid.checked}
        />
      </Grid>
    );
  });

export default InputItems;
