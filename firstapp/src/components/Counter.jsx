import React, { useState } from "react";

function Counter() {

 const [count,setCount]= useState(0)

 const increment=()=>{
    setCount(count+1)
 }

 const reset=()=>{
    setCount(0)
 }

 
 
  return (
    <div>
         <h2>{count}</h2>
         <button onClick={increment}>Increment</button>
         <button onClick={reset}>Reset</button>

         <h1>{count}</h1>

         <p>{count}</p>

    </div>
  );
}

export default Counter;
