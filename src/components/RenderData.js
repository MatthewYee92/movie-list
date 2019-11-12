import React from "react";
import movies from "../mockData";

const RenderData = props => {
  return (
    <div>
      <h1>... Render Data Component is rendering</h1>

      <div>
        {/* Hard code rendering */}
        Movie:{movies[0].title}
      </div>
    </div>
  );
};

export default RenderData;
