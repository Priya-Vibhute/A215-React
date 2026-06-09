import React, { createContext, useEffect, useState } from "react";
import N from "./N";
import { useSearchParams } from "react-router-dom";

export const context = createContext();

function M() {
  const [message, setMessage] = useState("Message from M component");
  const [user, setUser] = useState({ id: 101, name: "Nisha" });
  const [searchParams,setSearchParams]=useSearchParams();

  useEffect(()=>{
     console.log(searchParams.get("name"))
     console.log(searchParams.get("age"));
  },[searchParams])

  const changeParams=()=>{
     setSearchParams({name:"Nikita",age:19})
  }


  return (
    <div>
      <h1> M component</h1>
      <button onClick={changeParams}>Click</button>
      <context.Provider value={ {message, user }}>
        <N />
      </context.Provider>
    </div>
  );
}

export default M;
