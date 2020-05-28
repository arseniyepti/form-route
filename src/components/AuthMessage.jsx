import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapStateToProps = (state) => {
  const { authModalState } = state;
  return {
    authModalState,
  };
};

const actionCreators = {
  authModalStateSuccess: actions.authModalStateSuccess,
};

class AuthMessage extends Component {
  render() {
    const { authModalStateSuccess, authModalState } = this.props;
    return (
      <Wrap state={authModalState}>
        <Title>{`For editing, removing, creating articles you need log in`}</Title>
        <StyledLink
          onClick={() => authModalStateSuccess()}
          to={"/form-route/login"}
        >
          Sign in
        </StyledLink>
      </Wrap>
    );
  }
}

const ConnectedAuthMessage = connect(
  mapStateToProps,
  actionCreators
)(AuthMessage);

export default ConnectedAuthMessage;

const Wrap = styled.div`
  display: ${({ state }) => (state === "failed" ? "flex" : "none")};
  flex-flow: column;
  justify-content: space-around;
  position: fixed;
  top: 25%;
  left: calc(50% - 175px);
  z-index: 100;
  align-items: center;
  padding: 20px;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background: #fbfe6c;
`;

const Title = styled.h3``;

const StyledLink = styled(Link)``;
