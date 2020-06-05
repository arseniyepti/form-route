import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";

const authModalState = handleActions(
  {
    [actions.authModalStateSuccess]: () => {
      return "success";
    },
    [actions.authModalStateFailure]: () => {
      return "failed";
    },
  },
  null
);

const error = handleActions(
  {
    [actions.fetchAuthorizationFailure]: (
      state,
      { payload: { emailOrPassword } }
    ) => {
      return {
        ...state,
        authErrors: {
          emailOrPassword,
        },
      };
    },
    [actions.fetchRegistrationFailure]: (
      state,
      { payload: { email, password, username } }
    ) => {
      return {
        ...state,
        regErrors: {
          email,
          password,
          username,
        },
      };
    },
    [actions.fetchAddEditArticleFailure]: () => {
      return "authError";
    },
  },
  {
    authErrors: {
      emailOrPassword: null,
    },
    regErrors: {
      email: null,
      password: null,
      username: null,
    },
  }
);

const articles = handleActions(
  {
    [actions.fetchArticlesSuccess]: (
      state,
      { payload: { articles, articlesCount } }
    ) => {
      return { ...state, articles, articlesCount };
    },
    [actions.fetchFavouriteArticleSuccess]: (state, { payload: { slug } }) => {
      const changedArticles = state.articles.map((article) => {
        if (article.slug === slug) {
          return article.favorited
            ? {
                ...article,
                favoritesCount: article.favoritesCount - 1,
                favorited: !article.favorited,
              }
            : {
                ...article,
                favoritesCount: article.favoritesCount + 1,
                favorited: !article.favorited,
              };
        }
        return article;
      });
      return { ...state, articles: changedArticles };
    },
    [actions.fetchDeleteArticleSuccess]: (state, { payload: { slug } }) => {
      const articles = state.articles.filter((article) => {
        return article.slug !== slug;
      });
      return { ...state, articles };
    },
  },
  {
    articlesCount: 10,
    articles: [],
  }
);

export default combineReducers({
  error,
  authModalState,
  articles,
});
