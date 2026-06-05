import React, { useState } from "react";
import B from "./B";

function A() {
  const [message, setMessage] = useState("Data From A");
  return (
    <div>
      <h1>A component</h1>
      <B data={message} />
    </div>
  );
}

export default A;
