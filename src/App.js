function getMajor() {
  return "Full-stack";
}

const companyName = "DumbWays.ID";

function penjumlahan() {
  let x = 5;
  let y = 9;
  return x + y - x * x;
}

export default function App() {
  return (
    <>
      <p>
        Welcome to {companyName} Class {getMajor()}
      </p>
      <p>{penjumlahan()}</p>
    </>
  );
}
