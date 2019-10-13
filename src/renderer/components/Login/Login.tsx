import * as React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ClientConfig } from "../../../jira-client/models/client-config";

export interface Props {
  error?: any;
  login: (config: ClientConfig) => void;
}

const Login: React.FunctionComponent<Props> = ({ error, login }) => {
  const [user, setUser] = React.useState({
    url: "",
    email: "",
    apiToken: ""
  });

  const onEmailChange = ({ target }: any) =>
    setUser({ ...user, email: target.value });

  const onTokenChange = ({ target }: any) => {
    setUser({ ...user, apiToken: target.value });
  };

  const onURLChange = ({ target }: any) => {
    setUser({ ...user, url: target.value });
  };

  const onFormSubmit = () => login(user);

  return (
    <Card>
      <Card.Header className="text-center" as="h5">
        Sign In
      </Card.Header>
      <Card.Body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
              value={user.url}
              onChange={onURLChange}
              type="text"
              placeholder="Enter url"
            />
          </Form.Group>
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
              placeholder="Enter api token"
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
