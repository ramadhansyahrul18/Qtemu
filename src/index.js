import React from "react";
import ReactDOM from "react-dom";
// import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";

// import App from "./App";
// import App from "./MaterialUI";
// import App from "./ReactBootstrap";
// import App from "./SemanticReact";
import App from "./Task";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
