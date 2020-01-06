import React from 'react';
import { Grid } from '@material-ui/core';

import InputItem from './InputItem';

const InputItems = ({ items, stateMap }) =>
  Object.values(items).map(item => {
    const [itemVal, handlerSetItemVal] = stateMap[item.id];

    return (
      <Grid item xs={12} key={item.id}>
        <InputItem
          itemId={item.id}
          itemType={item.type}
          placeholder={item.placeholder}
          inputValue={itemVal}
          handlerOnChange={handlerSetItemVal}
        />
      </Grid>
    );
  });

export default InputItems;
