import Header from "./component/Header";

export default function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Content() {
  return (
    <div>
      <h1>This is Content</h1>
      <button>Click Me</button>
    </div>
  );
}

// export default App;
