// @flow

import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthScreen from "../AuthScreen/AuthScreen";
import HomeScreen from "../HomeScreen/HomeScreen";

export const ROUTES = {
  ROOT: "/",
  HOME: "/home"
};

type Props = {};

/** Router */
class Router extends Component<Props> {
  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.ROOT} component={AuthScreen} />
        <Route exact path={ROUTES.HOME} component={HomeScreen} />
        <Redirect to={ROUTES.ROOT} />
      </Switch>
    );
  }
}

export default Router;
