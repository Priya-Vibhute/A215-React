import React, { act, useReducer, useState } from 'react'

function ReducerExample2() {
    const reducer=(prev,action)=>{
        switch(action.type)
        {
            case 'ADD':
                return [...prev,action.payload]
        }
    }
    const [subjects,dispatch]=useReducer(reducer,["Maths"])
    const [value,setValue]=useState("")
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "ADD", payload: value })}>
        Add
      </button>
      <ul>
        {subjects.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReducerExample2