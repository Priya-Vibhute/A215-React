import React from "react";
import D from "./D";

function C({ data }) {
  return (
    <div>
      <h1>C component {data}</h1>
      <D data={data} />
    </div>
  );
}

export default C;
