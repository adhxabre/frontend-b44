import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default class ExampleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      ...this.state, // fullname, email, password
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Row className="d-flex align-items-center justify-content-center vh-100">
          <Col md="6">
            <Form onSubmit={this.handleOnSubmit}>
              <div className="text-center h3">REGISTER</div>
              <Form.Group className="mb-3" controlId="formFullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.fullname}
                  name="fullname"
                  size="sm"
                  type="text"
                  placeholder="Puan Maharani"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.email}
                  name="email"
                  size="sm"
                  type="email"
                  placeholder="puanmaharani@pdip.id"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.password}
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
}
