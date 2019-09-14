import * as React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { User } from "../../models/user";

const Login = ({ user }: { user: User }) => (
  <Card>
    <Card.Header className="text-center" as="h5">
      Sign In
    </Card.Header>
    <Card.Body>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Api token</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

export default Login;
