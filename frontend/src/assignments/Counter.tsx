import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev)=>prev+1);
  };
  const decrement = () => {
    setCount(prev => prev-1);
  };

  const reset = () => {
    setCount(0)
  }

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>increment()}>+</button>
     <button onClick={()=>decrement()}>-</button>
     <button onClick={()=>reset()}>reset</button>
    </>
  )
}

export default Counter
