import React, { Component } from "react";
import RenderData from "./components/RenderData";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>... App component is rendering</h1>
        <RenderData />
      </div>
    );
  }
}

export default App;
