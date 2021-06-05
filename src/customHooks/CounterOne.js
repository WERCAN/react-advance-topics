import React from "react";
import useCounterHook from "./useCounterHook";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounterHook(5,10);
  return (
    <div>
      CounterOne - {count}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
