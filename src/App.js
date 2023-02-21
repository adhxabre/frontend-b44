import { Routes, Route } from "react-router-dom";

import ExampleForm from "./pages/ExampleForm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExampleForm />} />
      </Routes>
    </>
  );
}
