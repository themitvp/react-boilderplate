// @flow

import React, { Component } from "react";
import BrowserMeta from "../../components/BrowserMeta/BrowserMeta";

type Props = {};

class HomeScreen extends Component<Props> {
  render() {
    return (
      <>
        <BrowserMeta title="Home" />
        <h1>Home Screen</h1>
      </>
    );
  }
}

export default HomeScreen;
