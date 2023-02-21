import { useNavigate } from "react-router-dom";

import DetailAbout from "../components/DetailAbout";

export default function About() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <div>
        <h1>Tentang Saya</h1>
        <p>Puan Maharani adalah seorang penjual pulau</p>

        <button onClick={handleNavigate}>Sign Up</button>

        <button onClick={() => navigate("/sign-up")}>Sign Up</button>

        <br />
        <br />
        <br />

        <DetailAbout
          title=""
          summary="No. 1 Penjual Pulau dan Provider"
          total={1300}
        />
      </div>
    </>
  );
}
