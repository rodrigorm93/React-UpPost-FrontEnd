import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { RegisterScreen } from "../components/register/RegisterScreen";
import { PostEntrySelect } from "../components/posted/PostEntrySelect";
import { DetailPost } from "../components/posted/DetailPost";

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/public/login" component={LoginScreen} />

      <Route exact path="/public/register" component={RegisterScreen} />

      <Route
        exact
        path="/public/category/:categoryid"
        component={PostEntrySelect}
      />

      <Route exact path="/public/detalle/:id" component={DetailPost} />

      <Redirect to="/" />
    </Switch>
  );
};
