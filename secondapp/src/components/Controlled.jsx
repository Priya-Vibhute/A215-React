import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("Anisha");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name || "Name is required"}
      
    </div>
  );
}

export default Controlled;
