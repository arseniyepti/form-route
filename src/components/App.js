import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authorization from "./Authorization";
import Main from "./Main";
import Registration from "./Registration";

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    isLogged: authState.isLogged,
  };
};

class App extends React.Component {
  render() {
    const { isLogged, history } = this.props;
    return (
      <Router>
        <Switch>
          <Route
            history={history}
            exact
            path="/form-route/"
            isLogged={isLogged}
            component={Main}
          />
          <Route
            history={history}
            exact
            path="/form-route/login/"
            isLogged={isLogged}
            component={Authorization}
          />
          <Route
            history={history}
            exact
            path="/form-route/signup"
            component={Registration}
          />
        </Switch>
      </Router>
    );
  }
}

const connectApp = connect(mapStateToProps)(App);

export default connectApp;
