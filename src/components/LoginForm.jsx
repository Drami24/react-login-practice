import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

import "./LoginForm.scss";
import { Grid } from "@material-ui/core";

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
    <form className="form-material" noValidate autoComplete="off">
      <div className="login-input">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PersonIcon />
          </Grid>
          <Grid item>
            <TextField name="email" label="Email" />
          </Grid>
        </Grid>
      </div>
      <div className="login-input">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockIcon></LockIcon>
          </Grid>
          <Grid item>
            <TextField name="password" type="password" label="Password" />
          </Grid>
        </Grid>
      </div>
      <div className="login-buttons">
        <Button
          id="btn-login"
          className="login-button"
          variant="contained"
          color="primary"
        >
          Log in
        </Button>
        <Button className="login-button" id="btn-registry" color="primary">
          Sign in
        </Button>
      </div>
    </form>
  );
};
