import React from 'react';
import { Grid } from '@material-ui/core';

import InputItem from './InputItem';

const InputItems = ({ inputForm, handlerSetInputForm }) =>
  Object.values(inputForm).map(item => {

    console.log('item:', item.id, item.value, item.valid);

    return (
      <Grid item xs={12} key={item.id}>
        <InputItem
          itemId={item.id}
          itemType={item.type}
          placeholder={item.placeholder}
          inputValue={item.value}
          handlerOnChange={handlerSetInputForm}
        />
      </Grid>
    );
  });

export default InputItems;
