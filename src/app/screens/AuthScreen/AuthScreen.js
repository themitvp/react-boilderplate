// @flow

import React, { Component } from "react";
import BrowserMeta from "../../components/BrowserMeta/BrowserMeta";
import { Typography } from "antd";

const { Title } = Typography;

type Props = {};

class AuthScreen extends Component<Props> {
  render() {
    return (
      <>
        <BrowserMeta title="Auth" />
        <Title>Auth Screen</Title>
      </>
    );
  }
}

export default AuthScreen;
