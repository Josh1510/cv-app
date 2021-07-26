import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Personal() {
  const classes = useStyles();

  const [personalDetails] = useState({
    usrFirstName: '',
    usrLastName: '',
    usrJobTitle: '',
    usrEmail: '',
    usrPhone: '',
    usrGitHub: '',
    usrLinkedIn: '',
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        id="usrFirstName"
        type="text"
        name="usrFirstName"
        label="First Name"
        defaultValue={personalDetails.usrFirstName}
      />
      <TextField
        variant="outlined"
        id="usrLastName"
        type="text"
        name="usrLastName"
        label="Last Name"
        defaultValue={personalDetails.usrLastName}
      />
      <TextField
        variant="outlined"
        id="usrJobTitle"
        type="text"
        name="usrJobTitle"
        label="Job Title"
        defaultValue={personalDetails.usrJobTitle}
      />
      <TextField
        variant="outlined"
        id="usrEmail"
        type="text"
        name="usrEmail"
        label="Email Address"
        defaultValue={personalDetails.usrEmail}
      />
      <TextField
        variant="outlined"
        id="usrPhone"
        type="text"
        name="usrPhone"
        label="Phone Number"
        defaultValue={personalDetails.usrPhone}
      />
      <TextField
        variant="outlined"
        id="usrGitHub"
        type="text"
        name="usrGitHub"
        label="GitHub"
        defaultValue={personalDetails.usrGitHub}
      />
      <TextField
        variant="outlined"
        id="usrLinkedIn"
        type="text"
        name="usrLinkedIn"
        label="LinkedIn"
        defaultValue={personalDetails.usrLinkedIn}
      />
    </form>
  );
}
