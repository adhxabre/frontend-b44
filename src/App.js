import { Routes, Route } from "react-router-dom";

import ExampleForm from "./pages/ExampleForm";
import CountState from "./pages/CountState";
import CountVar from "./pages/CountVar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExampleForm />} />
        <Route path="/countstate" element={<CountState />} />
        <Route path="/countvar" element={<CountVar />} />
      </Routes>
    </>
  );
}
