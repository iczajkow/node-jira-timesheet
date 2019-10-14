import * as React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { ClientConfig } from "../../../jira-client/models/client-config";
import { Redirect } from "react-router";
import "./Login.scss";

export interface Props {
  error?: any;
  isLoggedIn?: boolean;
  isLoggingIn?: boolean;
  login: (config: ClientConfig) => void;
}

const Login: React.FunctionComponent<Props> = ({
  error,
  isLoggedIn,
  isLoggingIn,
  login
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
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
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={user.email}
              onChange={onEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Api token</Form.Label>
            <Form.Control
              value={user.apiToken}
              onChange={onTokenChange}
              type="text"
              placeholder="Enter api token"
              required
            />
          </Form.Group>
          <div className="login-button__wrapper">
            <Button variant="primary" type="submit" disabled={isLoggingIn}>
              {isLoggingIn && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              <span>{isLoggingIn ? "Logginng in..." : "Login"}</span>
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
