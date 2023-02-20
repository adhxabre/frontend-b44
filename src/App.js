function greetings(name) {
  return alert(name);
}

export default function App() {
  return (
    <>
      <h1>Lu kalo mencet tombol ini, websitenya bakalan kasih alert</h1>
      <button onClick={() => alert("Pagi lur!")}>Klik disini</button>

      <h1>Lu kalo mencet tombol ini, websitenya bakalan kasih alert</h1>
      <button onClick={() => greetings("Roronoa Zoro")}>Klik disini</button>
    </>
  );
}
