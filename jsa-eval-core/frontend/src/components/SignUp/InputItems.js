import React from 'react';
import { Grid } from '@material-ui/core';

import InputItem from './InputItem';

const InputItems = ({ formItems, handlerSetFormItems }) =>
  Object.values(formItems.items).map(item => {

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
