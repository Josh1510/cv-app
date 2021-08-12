import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PersonalItem from './PersonalItem';
import personalData from './personalData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Personal = () => {
  const classes = useStyles();

  const personalDataItems = personalData.map((item) => (
    <PersonalItem
      key={item.id}
      variant={item.variant}
      type={item.type}
      name={item.name}
      label={item.label}
      defaultValue={item.defaultValue}
    />
  ));

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {personalDataItems}
    </form>
  );
};

export default Personal;
