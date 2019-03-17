// @flow

import React, { Component } from "react";
import BrowserMeta from "../../components/BrowserMeta/BrowserMeta";
import { Typography } from "antd";

const { Title } = Typography;

type Props = {};

class HomeScreen extends Component<Props> {
  render() {
    return (
      <>
        <BrowserMeta title="Home" />
        <Title>Home Screen</Title>
      </>
    );
  }
}

export default HomeScreen;
