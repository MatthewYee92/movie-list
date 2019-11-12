import React from "react";
import movies from "../mockData";

const RenderData = props => {
  const { isRendered, checkForRender } = props;
  return (
    <div>
      <h1>{ checkForRender(isRendered) }</h1>
      Movies:
      {movies.map((data, i) => (
        <li key={i}>{data.title}</li>
      ))}
    </div>
  );
};

export default RenderData;
