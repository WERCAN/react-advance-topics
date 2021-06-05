import React from "react";
import useCounterHook from "./useCounterHook";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounterHook(0, 1);
  return (
    <div>
      CounterTwo - {count}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default CounterTwo;
