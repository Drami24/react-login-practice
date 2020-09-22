import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./LoginForm.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField name="email" label="Email" />
      <TextField name="password" label="Password" />

      <Button id="btn-login" variant="contained" color="primary">
        Log in
      </Button>
      <Button id="btn-registry" color="primary">
        Create account
      </Button>
    </form>
  );
};
