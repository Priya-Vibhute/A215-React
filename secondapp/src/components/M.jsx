import React, { createContext, useState } from "react";
import N from "./N";

export const context = createContext();

function M() {
  const [message, setMessage] = useState("Message from M component");
  const [user, setUser] = useState({ id: 101, name: "Nisha" });
  return (
    <div>
      <h1> M component</h1>
      <context.Provider value={ message, {user }}>
        <N />
      </context.Provider>
    </div>
  );
}

export default M;
