import * as React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { User } from "../../models/user";

interface LoginProps {
  error: any;
  login: (user: User) => any;
}

const Login: React.FunctionComponent<LoginProps> = ({ error, login }) => {
  const [user, setUser] = React.useState({
    email: "a",
    apiToken: ""
  });

  const onEmailChange = ({ target }: any) =>
    setUser({ ...user, email: target.value });

  const onTokenChange = ({ target }: any) => {
    setUser({ ...user, apiToken: target.value });
  };

  return (
    <Card>
      <Card.Header className="text-center" as="h5">
        Sign In
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={user.email}
              onChange={onEmailChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Api token</Form.Label>
            <Form.Control
              value={user.apiToken}
              onChange={onTokenChange}
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
