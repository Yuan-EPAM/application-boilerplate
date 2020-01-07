import React from 'react';
import { Grid } from '@material-ui/core';

import InputItem from './InputItem';

const InputItems = ({ formItems, handlerSetFormItems }) =>
  Object.values(formItems.items).map(item => {

    console.log('item:', item.id, item.valid, item.value);

    return (
      <Grid item xs={12} key={item.id}>
        <InputItem
          itemId={item.id}
          itemType={item.type}
          placeholder={item.placeholder}
          inputValue={item.value}
          handlerSetFormItems={handlerSetFormItems}
          valid={item.valid}
          checked={formItems.valid.checked}
        />
      </Grid>
    );
  });

export default InputItems;
