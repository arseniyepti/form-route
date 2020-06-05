import React from "react";
import { connect } from "react-redux";
import { Modal } from "antd";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import { handleOk, onCancel, showModal } from "../heplers/helpers.js";
import AddEditArticle from "./AddEditArticle.jsx";
import Article from "./Article";
import Authorization from "./Authorization";
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
  render() {
    const {
      authModalStateSuccess,
      articles,
      history,
      authModalState,
    } = this.props;
    return (
      <>
        <Modal
          title="Authorization message"
          visible={showModal(null, authModalState)}
          onOk={handleOk(history, authModalStateSuccess)}
          onCancel={onCancel(authModalStateSuccess)}
        >
          You need{" "}
          <Link
            onClick={onCancel(authModalStateSuccess)}
            to="/form-route/login"
          >
            Log in
          </Link>
        </Modal>
        <Switch>
          <Route exact path="/form-route/" component={Main} />
          <Route exact path="/form-route/login" component={Authorization} />
          <Route exact path="/form-route/signup" component={Registration} />
          <Route exact path="/form-route/add" component={AddEditArticle} />
          <Route
            exact
            path="/form-route/articles/:slug"
            render={({ match }) => (
              <Article
                article={articles.find(
                  (article) => article.slug === match.params.slug
                )}
              />
            )}
          />
          <Route
            exact
            path="/form-route/:slug/edit"
            render={({ match }) => (
              <AddEditArticle
                articles={articles}
                article={articles.find(
                  (article) => article.slug === match.params.slug
                )}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

const connectApp = connect(mapStateToProps, actionCreators)(App);

export default withRouter(connectApp);
