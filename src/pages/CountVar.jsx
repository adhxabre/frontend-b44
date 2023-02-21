import React, { useReducer } from "react";

let count = 0;

export default function CountVar() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const Add = () => {
    count = count + 1;
    forceUpdate();
  };

  const Less = () => {
    count = count - 1;
    forceUpdate();
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}
