import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  //Custom Hook.........
  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleOne;
