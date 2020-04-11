import React from "react";
import "./styles.css";

import Card from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <h1 className="background-red">Hello CodeSandbox</h1>

      {/* inline CSS */}
      <h2 style={{ backgroundColor: "blue" }}>
        Start editing to see some magic happen!
      </h2>

      {/* component inline css */}
      <Card />
    </div>
  );
}
