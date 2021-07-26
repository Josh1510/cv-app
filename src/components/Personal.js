import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Personal = (props) => {
  const classes = useStyles();
  const { personalDetails } = props;
  return (
      <form className={classes.root} noValidate autoComplete="off"> 
      <TextField
        variant='outlined'
        id='firstName'
        type="text"  
        name="firstName"
        label="First Name"
        value={personalDetails.firstName}
      />
        </form>
      
  );
}

export default Personal;