import React, { useEffect } from 'react'

function Child({value}) {

    useEffect(()=>{
        console.log("child component")
    })
  return (
    <div>
        <h1>Child component  {value}</h1>
    </div>
  )
}

export default React.memo(Child)