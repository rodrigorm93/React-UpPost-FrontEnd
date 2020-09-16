import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { login } from "../action/auth";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoutePrivate } from "./DashboardRoutePrivate";
import { PrivateRoute } from "./PrivateRoute";
import { Spinner } from "react-bootstrap";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        //dispatch(startLoadingPosts());
        //una vez que sabemos el id del usuario hacmeos las carga de sus notas
      } else {
        setIsLoggedIn(false);
        //dispatch(startLoadingPosts());
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <PrivateRoute
          isAuthenticated={isLoggedIn}
          path="/private"
          component={DashboardRoutePrivate}
        />
        <Route path="/" component={AuthRouter} />
      </Switch>
    </Router>
  );
};
