import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    isLogged: authState.isLogged,
    user: authState.user ? authState.user.username : null,
  };
};

const actionCreators = {
  setAuthorizationSuccess: actions.setAuthorizationSuccess,
};

class Main extends Component {
  handleLogOut = () => {
    const { setAuthorizationSuccess } = this.props;
    setAuthorizationSuccess({ isLogged: false });
  };

  render() {
    const { isLogged, user } = this.props;
    if (isLogged === false) {
      return <Redirect to="/form-route/login" />;
    }
    return (
      <Wrapper>
        <Name>{` Привет ${user}`}</Name>
        <StyledLink onClick={this.handleLogOut} to="/form-route/login">
          Выход
        </StyledLink>
      </Wrapper>
    );
  }
}

const ConnectedMain = connect(mapStateToProps, actionCreators)(Main);

export default ConnectedMain;

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h2`
  text-transform: uppercase;
  color: rgba(0, 13, 34, 0.72);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 20px;
  right: 40px;
`;
