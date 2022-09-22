import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h2>카운터{count}</h2>
      <button onClick={() => setCount(count++)}>+1</button>
      <button onClick={() => setCount(count--)}>-1</button>
    </div>
  );
}
