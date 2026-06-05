import React, { useContext } from "react";
import P from "./P";
import { context } from "./M";

function O() {
  const { user } = useContext(context);
  return (
    <div>
      <h1>
        O component {user.id} {user.name}
      </h1>
      <P />
    </div>
  );
}

export default O;
