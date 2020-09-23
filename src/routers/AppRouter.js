import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { DashboardRoutePrivate } from "./DashboardRoutePrivate";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startChecking } from "../action/auth";
import { PostedEntries } from "../components/posted/PostedEntries";
import { Layout } from "antd";
import FooterApp from "../components/footer/FooterApp";
import { MenuPosted } from "../components/topMenu/MenuPosted";
import { StartLoadingPosts } from "../action/post";
import { Spinner } from "react-bootstrap";

const { Content } = Layout;

export const AppRouter = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  const { checking: checkingLoadPosts, ok } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
    dispatch(StartLoadingPosts());
  }, [dispatch, ok]);

  if (checking && checkingLoadPosts) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <Router>
      <Layout className="layout">
        <MenuPosted />

        <Content className="content-app">
          <div className="site-layout-content">
            <Switch>
              <PrivateRoute
                isAuthenticated={!!uid}
                path="/private"
                component={DashboardRoutePrivate}
              />
              <PublicRoute
                path="/public"
                component={AuthRouter}
                isAuthenticated={!!uid}
              />
              <Route exact path="/" component={PostedEntries} />
            </Switch>
          </div>
        </Content>
        <FooterApp />
      </Layout>
    </Router>
  );
};
