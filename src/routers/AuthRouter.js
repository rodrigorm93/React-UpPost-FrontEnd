import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { RegisterScreen } from "../components/register/RegisterScreen";
import { Layout } from "antd";
import { MenuPosted } from "../components/topMenu/MenuPosted";
import { PostedEntries } from "../components/posted/PostedEntries";
import { PostEntrySelect } from "../components/posted/PostEntrySelect";
import { DetailPost } from "../components/posted/DetailPost";
import FooterApp from "../components/footer/FooterApp";

const { Content } = Layout;

export const AuthRouter = () => {
  return (
    <Layout className="layout">
      <MenuPosted />

      <Content className="content-app">
        <div className="site-layout-content">
          <Switch>
            <Route exact path="/login" component={LoginScreen} />

            <Route exact path="/register" component={RegisterScreen} />

            <Route exact path="/" component={PostedEntries} />
            <Route
              exact
              path="/category/:categoryid"
              component={PostEntrySelect}
            />

            <Route exact path="/detalle/:id" component={DetailPost} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Content>
      <FooterApp />
    </Layout>
  );
};
