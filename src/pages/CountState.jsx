import React, { useState } from "react";

export default function CountState() {
  const [count, setCount] = useState(0);

  const Add = () => {
    setCount(count + 1);
  };

  const Less = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}
