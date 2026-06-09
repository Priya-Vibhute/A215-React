import React, { useReducer } from 'react'

function ReducerExample() {

    const reducer=(prev,action)=>{

        switch(action.type)
        {
            case "INC":
                       return prev+action.payload
            case "DEC":
                  return prev - action.payload;
            case "MUL":
                 return prev * action.payload;
            case 'RESET':
                return 0
        }
      
    }
    const [count,dispatch]=useReducer(reducer,0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INC",payload:2 })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC",payload:3 })}>DEC</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}

export default ReducerExample