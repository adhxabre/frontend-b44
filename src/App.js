import { Routes, Route } from "react-router-dom";

import ExampleForm from "./pages/ExampleForm";
import CountState from "./pages/CountState";
import CountVar from "./pages/CountVar";
import EffectClass from "./pages/EffectClass";
import EffectFunc from "./pages/EffectFunc";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExampleForm />} />
        <Route path="/countstate" element={<CountState />} />
        <Route path="/countvar" element={<CountVar />} />
        <Route path="/effectclass" element={<EffectClass />} />
        <Route path="/effectfunc" element={<EffectFunc />} />
      </Routes>
    </>
  );
}
