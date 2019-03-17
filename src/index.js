import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/screens/Router/Router";
import * as serviceWorker from "./serviceWorker";

const renderApp = (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

const element = document.getElementById("root");
if (!element) {
  throw new Error("couldn't find element with id root");
}

ReactDOM.render(renderApp, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
