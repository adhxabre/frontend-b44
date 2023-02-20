const ListArray = ["Jokowi Dodo", "Puan Maharani", "Megawati", "Soekarno"];

export default function App() {
  return (
    <>
      <h1>Ini list bro!</h1>

      <Props ListData="BMW" ListName="C80" />
      <Props ListData="Lemberjember" ListName="Galardo" />
      <Props ListData="Toyota" ListName="Avanza Hitam" />
      <Props ListData="Ferdi" ListName="Sambo" />
      <Props ListData="PDI-P" ListName={ListArray[0]} />
      <Props
        ListData="Puan"
        ListName="Maharani"
        JualPulau={true}
        BerapaPulau={34}
      />
    </>
  );
}

function Props(props) {
  return (
    <>
      <h1>{props.ListData}</h1>
      <h2>{props.ListName}</h2>
      <h3>{props.JualPulau}</h3>
      <h4>{props.BerapaPulau}</h4>
    </>
  );
}
