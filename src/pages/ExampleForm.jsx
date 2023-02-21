import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ExampleForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form, // fullname, email, password
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col md="6">
          <Form onSubmit={handleOnSubmit}>
            <div className="text-center h3">REGISTER</div>
            <Form.Group className="mb-3" controlId="formFullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={form.fullname}
                name="fullname"
                size="sm"
                type="text"
                placeholder="Puan Maharani"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={form.email}
                name="email"
                size="sm"
                type="email"
                placeholder="puanmaharani@pdip.id"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={form.password}
                name="password"
                size="sm"
                type="password"
                placeholder="puanpulau!012"
              />
            </Form.Group>

            <Button variant="primary" type="submit" size="sm">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
