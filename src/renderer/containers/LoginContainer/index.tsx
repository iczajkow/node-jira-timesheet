import * as React from "react";
import Login from "../../components/Login/Login";
import { RootState } from "../../reducer";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  user: state.app.user
});

// const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
//   incrementValue: () => dispatch(increment()),
//   decrementValue: () => dispatch(decrement())
// });

export default connect(mapStateToProps)(Login);
