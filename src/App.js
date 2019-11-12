import React, { Component } from "react";
import RenderData from "./components/RenderData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isRendered: true
    };
  }

  // renderMovies = () => {
  //   const render = movies.map(data => data.title)
  //   return render
  // }
  checkForRender = (state) => {
    if (state === false) {
      return "... loading";
    }
  };

  render() {
    const { isRendered } = this.state;
    const { checkForRender } = this;
    return (
      <div>
        <h1>... App component is rendering</h1>
        <RenderData isRendered={isRendered} checkForRender={checkForRender} />
      </div>
    );
  }
}

export default App;