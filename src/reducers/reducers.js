import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";

const articlesFetchingState = handleActions(
  {
    [actions.fetchArticlesSuccess]: () => {
      return "success";
    },
  },
  null
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
  null
);

const articlesFavouriteFetchingState = handleActions(
  {
    [actions.fetchFavouriteArticleFailure]: () => {
      return "failed";
    },
  },
  null
);

const authorization = handleActions(
  {
    [actions.fetchAuthorizationSuccess]: () => {
      return "finished";
    },
    [actions.fetchAuthorizationFailure]: (
      state,
      { payload: { emailOrPassword } }
    ) => {
      return {
        ...state,
        errors: {
          emailOrPassword,
        },
      };
    },
  },
  {
    errors: {
      emailOrPassword: null,
    },
  }
);

const registration = handleActions(
  {
    [actions.fetchRegistrationSuccess]: () => {
      return "finished";
    },
    [actions.fetchRegistrationFailure]: (
      state,
      { payload: { email, password, username } }
    ) => {
      return {
        ...state,
        errors: {
          email,
          password,
          username,
        },
      };
    },
  },
  {
    errors: {
      email: null,
      password: null,
      username: null,
    },
  }
);

const addEditArticleState = handleActions(
  {
    [actions.fetchAddEditArticleSuccess]: () => {
      return "success";
    },
    [actions.fetchAddEditArticleFailure]: () => {
      return "authError";
    },
  },
  null
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
  addEditArticleState,
  articlesFetchingState,
  articlesFavouriteFetchingState,
  authorization,
  authModalState,
  registration,
  articles,
});
