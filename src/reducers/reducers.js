import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchAddArticleFailure,
  fetchAddArticleSuccess,
  fetchDeleteArticleSuccess,
  fetchFavouriteArticleSuccess,
} from "../actions/actions";
import * as actions from "../actions/actions";

const articlesFetchingState = handleActions(
  {
    [actions.fetchArticlesFailure]: () => {
      return "failed";
    },
  },
  "none"
);

const authModalState = handleActions(
  {
    [actions.authModalStateSuccess]: () => {
      return "success";
    },
    [actions.authModalStateFailure]: () => {
      return "failed";
    },
  },
  "none"
);

const addArticlesFetchingState = handleActions(
  {
    [actions.fetchAddArticleSuccess]: () => {
      return "success";
    },
    [actions.fetchAddArticleFailure]: (state, { payload }) => {
      return payload;
    },
  },
  "none"
);

const updateArticlesFetchingState = handleActions(
  {
    [actions.fetchUpdateArticleSuccess]: () => {
      return "success";
    },
    [actions.fetchUpdateArticleFailure]: (state, { payload }) => {
      return payload;
    },
  },
  "none"
);

const authState = handleActions(
  {
    [actions.fetchAuthorizationSuccess]: (
      state,
      { payload: { token, username } }
    ) => {
      return { ...state, token, username };
    },
    [actions.fetchAuthorizationFailure]: (
      state,
      { payload: { emailOrPassword, authorization } }
    ) => {
      return {
        ...state,
        UIState: { ...state.UIState, authorization },
        errors: {
          emailOrPassword,
        },
      };
    },
    [actions.fetchAuthorizationFinally]: (state, { payload: { loading } }) => {
      return { ...state, UIState: { ...state.UIState, loading } };
    },
  },
  {
    token: "none",
    username: "none",
    UIState: {
      loading: false,
      authorization: true,
    },
    errors: {
      email: null,
      password: null,
    },
  }
);

const regState = handleActions(
  {
    [actions.fetchRegistrationSuccess]: (
      state,
      { payload: { registration } }
    ) => {
      return { ...state, UIState: { ...state.UIState, registration } };
    },
    [actions.fetchRegistrationFailure]: (
      state,
      { payload: { email, password, username, registration } }
    ) => {
      return {
        ...state,
        UIState: { ...state.UIState, registration },
        errors: {
          email,
          password,
          username,
        },
      };
    },
    [actions.fetchRegistrationFinally]: (state, { payload: { loading } }) => {
      return { ...state, UIState: { ...state.UIState, loading } };
    },
  },
  {
    UIState: {
      loading: false,
    },
    errors: {
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
    [actions.fetchFavouriteArticleSuccess]: (
      state,
      { payload: { favoritesCount, slug, favorited } }
    ) => {
      const changedArticles = state.articles.map((article) => {
        return article.slug === slug
          ? { ...article, favoritesCount, favorited }
          : article;
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
    articlesCount: 0,
    articles: [],
  }
);

const tags = handleActions(
  {
    [actions.addTag]: (state, { payload: { tag, id } }) => {
      return [{ tag, id: id() }, ...state];
    },
    [actions.clearTags]: (state) => {
      state = [];
      return state;
    },
    [actions.changeTag]: (state, { payload: { tagList, id } }) => {
      state = [];
      return tagList.reduce((acc, tag) => {
        return [...acc, { tag, id: id() }];
      }, state);
    },
  },
  []
);

const addArticles = handleActions(
  {
    [actions.fetchAddArticleFinally]: (state, { payload: { loading } }) => {
      return { ...state, UIState: { ...state.UIState, loading } };
    },
  },
  {
    UIState: {
      loading: false,
    },
  }
);

export default combineReducers({
  updateArticlesFetchingState,
  articlesFetchingState,
  addArticlesFetchingState,
  authState,
  authModalState,
  regState,
  articles,
  tags,
  addArticles,
});
