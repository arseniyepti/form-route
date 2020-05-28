import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddArticle from "./AddArticle";
import Article from "./Article";
import AuthMessage from "./AuthMessage";
import Authorization from "./Authorization";
import EditArticle from "./EditArticle.jsx";
import Main from "./Main";
import Registration from "./Registration";
import * as actions from "../actions/actions";

const mapStateToProps = (state) => {
  const {
    articles: { articles },
    authModalState,
  } = state;
  return {
    articles,
    authModalState,
  };
};

const actionCreators = {
  fetchArticles: actions.fetchArticles,
  authModalStateSuccess: actions.authModalStateSuccess,
};

class App extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  setArticlesRoutes = (changeRoutes) => {
    const { articles, history } = this.props;
    if (articles.length !== 0) {
      return articles.map((article) => {
        return (
          <Route
            key={article.slug}
            history={history}
            exact
            path={
              changeRoutes === "articles"
                ? `/form-route/articles/${article.slug}`
                : `/form-route/${article.slug}/edit`
            }
            render={() => {
              return changeRoutes === "articles" ? (
                <Article article={article} />
              ) : (
                <EditArticle article={article} />
              );
            }}
          />
        );
      });
    }
  };

  render() {
    const { authModalStateSuccess, authModalState } = this.props;
    return (
      <Router>
        <AuthMessage />
        <Wrap onClick={() => authModalStateSuccess()} state={authModalState} />
        <Switch>
          <Route exact path="/form-route" component={Main} />
          <Route exact path="/form-route/login" component={Authorization} />
          <Route exact path="/form-route/signup" component={Registration} />
          <Route exact path="/form-route/add" component={AddArticle} />
          <Route exact path="/form-route/edit" component={EditArticle} />
          {this.setArticlesRoutes("articles")}
          {this.setArticlesRoutes()}
        </Switch>
      </Router>
    );
  }
}

const connectApp = connect(mapStateToProps, actionCreators)(App);

export default connectApp;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-self: flex-end;
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${({ state }) => (state === "failed" ? "50" : "-5")};
  background-color: ${({ state }) =>
    state === "failed" ? "rgba(23, 32, 23, 0.4)" : "transparent"};
`;
