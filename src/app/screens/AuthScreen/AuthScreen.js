// @flow

import React, { Component } from "react";
import BrowserMeta from "../../components/BrowserMeta/BrowserMeta";

type Props = {};

class AuthScreen extends Component<Props> {
  render() {
    return (
      <>
        <BrowserMeta title="Auth" />

        <h1>Auth Screen</h1>
      </>
    );
  }
}

export default AuthScreen;
