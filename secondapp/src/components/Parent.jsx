import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {

  const [count,setCount]=useState(0)
  const [value,setValue]=useState(0)

  const increment=()=>{
    setCount(count+1);
    if(count%10==0)
    {
        setValue(count)
    }
  }

  useEffect(()=>{
    console.log("Parent")
  })
  return (
    <div>
        <h1>Parent component  {count}</h1>
        <button className=' btn btn-primary'  onClick={increment}>Increment</button>
        <Child value={value}/>
    </div>
  )
}

export default Parent