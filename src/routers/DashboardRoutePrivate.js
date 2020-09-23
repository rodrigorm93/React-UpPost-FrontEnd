import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AddPost } from "../components/posted/AddPost";
import { ViewMyPost } from "../components/posted/ViewMyPost";
import { EditPost } from "../components/posted/EditPost";
import { useSelector } from "react-redux";

export const DashboardRoutePrivate = () => {
  // <Route exact path="/private/editPost" component={EditPost} />
  const { active, ok } = useSelector((state) => state.posts);
  return (
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
  );
};
