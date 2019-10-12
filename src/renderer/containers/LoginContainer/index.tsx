import * as React from "react";
import Login from "../../components/Login/Login";
import { RootState } from "../../reducer";
import { connect } from "react-redux";
import { LoginActions, login } from "./actions";
import { User } from "../../models/user";

const mapStateToProps = (state: RootState) => ({
  user: state.app.user
});

const mapDispatchToProps = (dispatch: React.Dispatch<LoginActions>) => ({
  login: (user: User) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
