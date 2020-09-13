import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { RegisterScreen } from "../components/register/RegisterScreen";
import { Layout } from "antd";
import { MenuPosted } from "../components/topMenu/MenuPosted";
import { PostedEntries } from "../components/posted/PostedEntries";
import { PostEntrySelect } from "../components/posted/PostEntrySelect";

const { Content } = Layout;

export const AuthRouter = () => {
  return (
    <>
      <MenuPosted />
      <Content
        className="site-layout-background"
        style={{
          padding: 14,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginScreen} />

          <Route exact path="/register" component={RegisterScreen} />

          <Route exact path="/" component={PostedEntries} />
          <Route
            exact
            path="/category/:categoryid"
            component={PostEntrySelect}
          />

          <Redirect to="/" />
        </Switch>
      </Content>
    </>
  );
};
