import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { changeLog, changeName } from "../heplers/helpers";
import Article from "./Article";
import Buttons from "./Buttons";

const mapStateToProps = (state) => {
  const { articles, count, articlesCount } = state.articles;
  return {
    articles,
    count,
    articlesCount,
  };
};

const actionCreators = {
  fetchAuthorizationSuccess: actions.fetchAuthorizationSuccess,
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.storage = sessionStorage.getItem("count")
      ? null
      : sessionStorage.setItem("count", 0);
  }

  handleLogOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
  };

  renderArticles = () => {
    const { articles } = this.props;
    if (articles.length !== 0) {
      return articles.map((article) => {
        return <Article key={article.slug} UIState={true} article={article} />;
      });
    }
  };

  render() {
    const count = sessionStorage.getItem("count");
    const { articlesCount } = this.props;
    return (
      <Container>
        <Count>{`${count} out of ${articlesCount}`}</Count>
        <Buttons />
        <Wrapper>
          <Name>{changeName()}</Name>
          <StyledLink onClick={this.handleLogOut} to="/form-route/login">
            {changeLog()}
          </StyledLink>
          {this.renderArticles()}
        </Wrapper>
        <AddButton to={"/form-route/add"}>Add</AddButton>
      </Container>
    );
  }
}

const ConnectedMain = connect(mapStateToProps, actionCreators)(Main);

export default ConnectedMain;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 950px;

  border: 1px solid cornflowerblue;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(216, 236, 251, 0.53);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 850px;
  padding-bottom: 30px;
`;

const Name = styled.span`
  position: fixed;
  top: 20px;
  right: 100px;
  color: rgba(0, 13, 34, 0.72);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: fixed;
  top: 20px;
  right: 30px;
`;

const AddButton = styled(Link)`
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(24, 144, 255);
  color: white;
  border: 1px solid rgb(24, 144, 255);
  margin-top: auto;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgb(64, 169, 255);
    color: white;
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #192c3e;
  width: 150px;
  height: 30px;
`;
