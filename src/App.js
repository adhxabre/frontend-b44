import { useState } from "react";

const pdip =
  "https://upload.wikimedia.org/wikipedia/min/thumb/0/09/LOGO-_PDIP.svg/212px-LOGO-_PDIP.svg.png";

const ferdiSambo =
  "https://www.kenhub.com/thumbor/bMa9OaR37bsBZ4T3cFyXl83_MHI=/fit-in/413x413/filters:fill(FFFFFF,true):watermark(/images/watermark_only_sm.png,0,0,0):watermark(/images/logo_url_sm.png,-10,-10,0):format(jpeg)/images/anatomy_term/skull/eEsfu70EOMx1TlBf5tYAiA_Go0bFvBvzClwSivuaiELg_head_01.png";

export default function App() {
  const [data, setData] = useState("");

  return (
    <>
      <h1>{data}</h1>
      {data === "Puan Maharani" ? <img src={pdip} /> : <img src={ferdiSambo} />}
      <input type="text" onChange={(e) => setData(e.target.value)} />
    </>
  );
}
