import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(preCount => preCount + 1);
  }
  
  const decrement = () => {
    setCount(preCount => preCount - 1);
  }

  return (
    <div>
      <h1>Counter Page</h1>
      <h2>count: {count}</h2>
      <div>
        <button type="button" onClick={increment}>UP</button>
        <button type="button" onClick={decrement}>DOWN</button>
      </div>
    </div>
  )
}

export default Counter;