import React from "react";
import { MenuPosted } from "../components/topMenu/MenuPosted";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { AddPost } from "../components/posted/AddPost";
import { ViewMyPost } from "../components/posted/ViewMyPost";
import { EditPost } from "../components/posted/EditPost";
import { useSelector } from "react-redux";

const { Content } = Layout;

export const DashboardRoutePrivate = () => {
  // <Route exact path="/private/editPost" component={EditPost} />
  const { active, ok } = useSelector((state) => state.posts);
  return (
    <Layout className="layout">
      <MenuPosted />

      <Content
        className="site-layout"
        style={{ padding: "0 10px", marginTop: 20 }}
      >
        <Switch>
          {ok ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/private/subirPost" component={AddPost} />
          )}

          <Route exact path="/private/viewPost" component={ViewMyPost} />
          {active ? (
            <Route exact path="/private/editPost" component={EditPost} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Content>
    </Layout>
  );
};
