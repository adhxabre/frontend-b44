import React from "react";

const datas = [
  "Ngab Owie",
  "Puan Maharani",
  "Megawati",
  "Pak Kades",
  "Singkong",
];

export default function ExampleForm() {
  return (
    <div>
      <ul>
        {datas.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}
