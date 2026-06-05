import React, { useContext } from "react";
import { context } from "./M";

function P() {
  const { message } = useContext(context);

  return (
    <div>
      <h1>P component {message}</h1>
    </div>
  );
}

export default P;
