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
        variant="outlined"
        id="usrFirstName"
        type="text"
        name="usrFirstName"
        label="First Name"
        value={personalDetails.firstName}
      />
      <TextField
        variant="outlined"
        id="usrLastName"
        type="text"
        name="usrLastName"
        label="Last Name"
        value={personalDetails.firstName}
      />
      <TextField
        variant="outlined"
        id="usrEmail"
        type="text"
        name="usrEmail"
        label="Email Address"
        value={personalDetails.firstName}
      />
      <TextField
        variant="outlined"
        id="usrPhone"
        type="text"
        name="usrPhone"
        label="Phone Number"
        value={personalDetails.firstName}
      />
      <TextField
        variant="outlined"
        id="usrGitHub"
        type="text"
        name="usrGitHub"
        label="GitHub"
        value={personalDetails.firstName}
      />
      <TextField
        variant="outlined"
        id="usrLinkedIn"
        type="text"
        name="usrLinkedIn"
        label="LinkedIn"
        value={personalDetails.firstName}
      />
    </form>
  );
};

export default Personal;
