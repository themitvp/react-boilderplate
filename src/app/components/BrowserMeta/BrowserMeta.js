// @flow

import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";

const metaTitle = "Title";

type Props = {
  /** Meta title (optional) */
  title?: string
};

/**
 * Set the brower's meta such as title
 */
class BrowserMeta extends PureComponent<Props> {
  render() {
    const { title } = this.props;

    // if no title is passed in, then just show
    // the main title
    const prefixTitle = title ? title + " | " : "";

    return (
      <Helmet>
        <title>
          {prefixTitle}
          {metaTitle}
        </title>
      </Helmet>
    );
  }
}

export default BrowserMeta;
