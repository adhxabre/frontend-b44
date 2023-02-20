import cssModules from "./App.module.css";

import { Form, Col, Row } from "react-bootstrap";

export default function App() {
  return (
    <form className={cssModules.form}>
      <div className={cssModules.formGroup}>
        <label htmlFor="username" className={cssModules.formLabel}>
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Input username"
          className={cssModules.formInput}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email" className="formLabel">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Input email"
          className="formInput"
        />
      </div>
      <div className={cssModules.formGroup}>
        <label htmlFor="password" className={cssModules.formLabel}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Input password"
          className={cssModules.formInput}
        />
      </div>

      <Row>
        <Form.Group as={Col} md="6" style={{ marginBottom: "16px" }}>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Input city" required />
        </Form.Group>
        <Form.Group as={Col} md="6" style={{ marginBottom: "16px" }}>
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Input state" required />
        </Form.Group>
      </Row>
    </form>
  );
}
