import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return console.log(data);
  });

  return (
    <Container>
      <h1>Data user dengan parameter {params.id}</h1>
      <br />
      <p>{data?.username}</p>
      <p>{data?.email}</p>
      <p>{data?.phone}</p>
      <p>{data?.website}</p>
      <p>{data?.company?.name}</p>
    </Container>
  );
}
