import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { NavLink, Route } from "react-router-dom";
import MainPage from "../MainPage";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
    //if correct, go back home but also push boolean
  }
  function validate() {
    if (email === "a@b.ca") {
      props.history.push({ pathname: "/", search: "?" + "login=true" });
    } else {
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <NavLink to="/" exact>
        Back
      </NavLink>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
          onClick={() => validate()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login;
