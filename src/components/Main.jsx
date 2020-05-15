import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    isLogged: authState.isLogged,
  };
};

const actionCreators = {
  fetchAuthorizationSuccess: actions.fetchAuthorizationSuccess,
};

class Main extends Component {
  handleLogOut = () => {
    const { fetchAuthorizationSuccess } = this.props;
    fetchAuthorizationSuccess({ isLogged: false });
  };

  render() {
    const { isLogged } = this.props;
    const accept = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (isLogged === false && !accept) {
      return <Redirect to="/form-route/login" />;
    }
    return (
      <Wrapper>
        <Name>{` Hi, ${username}, I know It is you`}</Name>
        <StyledLink onClick={this.handleLogOut} to="/form-route/login">
          Logout
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
