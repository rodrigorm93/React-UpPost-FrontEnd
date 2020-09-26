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
import { clearState } from "../action/post";
import { Spinner } from "react-bootstrap";

const { Content } = Layout;

export const AppRouter = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  const { checking: checkingLoadPosts, ok, deletePost } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  console.log("appRouter");

  useEffect(() => {
    dispatch(startChecking()); //chekear si el usuario ha cargado

    dispatch(clearState());
    //dispatch(StartLoadingPosts());
    //dispatch(StartLoadingPostsPagination(pagination));
  }, [dispatch, ok, deletePost]);

  if (checking && checkingLoadPosts) {
    //temrinara der cargar una vez que el usuario y el post esten cargados
    return (
      <div className="spinner">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  return (
    <Layout>
      <Router>
        <MenuPosted />

        <Content className="content-app animate__animated animate__fadeIn">
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
      </Router>
    </Layout>
  );
};
