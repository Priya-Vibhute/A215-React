import React from "react";
import C from "./C";

function B({ data }) {
  return (
    <div>
      <h1>B component {data}</h1>
      <C data={data} />
    </div>
  );
}

export default B;
