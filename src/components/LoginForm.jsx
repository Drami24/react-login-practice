import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";

import "./LoginForm.scss";

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form className="form-material" noValidate autoComplete="off">
      <div className="login-input">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Person />
          </Grid>
          <Grid item>
            <TextField name="email" label="Email" />
          </Grid>
        </Grid>
      </div>
      <div className="login-input">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Lock />
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
