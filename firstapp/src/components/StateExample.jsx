import React, { useState } from "react";

function StateExample() {
  const [name, setName] = useState("");
  const [obj, setObj] = useState({
    id: 101,
    name: "Nisha",
  });

  

  return (
    <div>
      {/* Short circuiting  */}
      {/* {name && <p>Name is {name}</p>} */}

      {/* <p> { name || "Name not given"}</p> */}

      {name ? <p>Name is {name}</p> : <small>Name not given</small>}

      <button onClick={() => setName("Nisha")}>Click</button>

      <hr />

      <h1>
        Obj {obj.id} {obj.name}
      </h1>

      <button onClick={() => setObj({ ...obj, name: "ANisha" })}>
        {" "}
        Click{" "}
      </button>
    </div>
  );
}

export default StateExample;
