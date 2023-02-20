import { useState } from "react";

export default function App() {
  let total = 0;
  const [count, setCount] = useState(0);

  function Add() {
    if (count === 10) return;
    setCount(count + 1);
    console.log(count);
  }

  function Less() {
    if (count === 0) return;
    setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </>
  );
}
