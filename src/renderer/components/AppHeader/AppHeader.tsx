import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import { User } from "../../../jira-client/models/user";
import "./AppHeader.scss";
import Button from "react-bootstrap/Button";

interface Props {
  user?: User;
  logout?: () => void;
}

const AppHeader: React.FunctionComponent<Props> = ({ user, logout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img
          className="user__avatar"
          alt="user-avatar"
          src={user.avatarUrls["32x32"]}
        />
        <span>{user.displayName}</span>
      </Navbar.Brand>
      <Button variant="outline-secondary" onClick={logout}>
        Logout
      </Button>
    </Navbar>
  );
};

export default AppHeader;
