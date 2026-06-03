import React, { useEffect, useState } from "react";

function Effect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(count);
    }, 5000);

    // cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Effect1;
