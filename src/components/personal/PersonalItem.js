import React from 'react';
import TextField from '@material-ui/core/TextField';

function PersonalItem(props) {
  return (
    <TextField
      variant={props.variant}
      id={props.id}
      type={props.type}
      name={props.name}
      label={props.label}
      defaultValue={props.defaultValue}
    />
  );
}

export default PersonalItem;
