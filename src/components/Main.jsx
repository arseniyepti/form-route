import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../actions/actions";
import { changeLog, changeName, setAccess } from "../heplers/helpers";
import Article from "./Article";
import { Pagination, Button, Spin } from "antd";

const mapStateToProps = (state) => {
  const {
    articles: { articles, articlesCount },
  } = state;
  return {
    articles,
    articlesCount,
  };
};

const actionCreators = {
  fetchArticles: actions.fetchArticles,
  authModalStateFailure: actions.authModalStateFailure,
};

class Main extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  handleLogOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
  };

  renderArticles = () => {
    const { articles } = this.props;
    return articles.map((article) => {
      return <Article key={article.slug} article={article} />;
    });
  };
  onChange = (event) => {
    const { fetchArticles } = this.props;
    const count = event + "0" - 10;
    fetchArticles(count);
  };

  render() {
    const {
      articlesCount,
      authModalStateFailure,
      history,
      articles,
    } = this.props;
    const name = localStorage.getItem("username");
    return (
      <Container>
        <StyledPagination
          defaultCurrent={1}
          pageSize={10}
          showSizeChanger={false}
          total={articlesCount}
          onChange={this.onChange}
          showTotal={(total, range) => `${range[1]} of ${total} items`}
        />
        <AuthMessage name={name}>
          For editing, deleting and adding articles you need{" "}
          <MessageLink to="/form-route/login">{" Log in"}</MessageLink>
        </AuthMessage>
        <Wrapper>
          <Name>{changeName()}</Name>
          <StyledLink onClick={this.handleLogOut} to="/form-route/login">
            {changeLog()}
          </StyledLink>
          <StyledSpin articles={articles} size="large" tip="Loading..." />
          {this.renderArticles()}
        </Wrapper>
        <AddButton
          type="primary"
          onClick={setAccess(name, authModalStateFailure, history, null, "add")}
        >
          Add
        </AddButton>
      </Container>
    );
  }
}

const ConnectedMain = connect(mapStateToProps, actionCreators)(Main);

export default withRouter(ConnectedMain);

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

const StyledPagination = styled(Pagination)`
  padding: 30px 0;
`;

const StyledSpin = styled(Spin)`
  margin-top: 150px;
  display: ${({ articles }) => (articles.length === 0 ? "block" : "none")};
`;

const Name = styled.span`
  position: fixed;
  top: 20px;
  right: 100px;
  color: rgba(0, 13, 34, 0.72);
`;

const AuthMessage = styled.div`
  display: ${({ name }) => (name ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 700px;
  background-color: rgba(233, 233, 113, 0.6);
`;

const MessageLink = styled(Link)`
  padding: 0 5px;
`;

const StyledLink = styled(Link)`
  padding: 0 5px;
  text-decoration: none;
  position: fixed;
  top: 20px;
  right: 30px;
`;

const AddButton = styled(Button)`
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;
