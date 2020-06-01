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

const addArticlesFetchingState = handleActions(
  {
    [actions.fetchAddArticleSuccess]: () => {
      return "request";
    },
    [actions.fetchAddArticleSuccess]: () => {
      return "finished";
    },
    [actions.fetchAddArticleFailure]: (state, { payload }) => {
      return payload;
    },
  },
  null
);

const updateArticlesFetchingState = handleActions(
  {
    [actions.fetchUpdateArticleRequest]: () => {
      return "success";
    },
    [actions.fetchUpdateArticleSuccess]: () => {
      return "finished";
    },
    [actions.fetchUpdateArticleFailure]: (state, { payload }) => {
      return payload;
    },
  },
  null
);

const authorizationState = handleActions(
  {
    [actions.fetchAuthorizationRequest]: () => {
      return "request";
    },
    [actions.fetchAuthorizationFailure]: () => {
      return "failed";
    },
    [actions.fetchAuthorizationSuccess]: () => {
      return "finished";
    },
  },
  null
);

const registrationState = handleActions(
  {
    [actions.fetchRegistrationRequest]: () => {
      return "request";
    },
    [actions.fetchRegistrationFailure]: () => {
      return "failed";
    },
    [actions.fetchRegistrationSuccess]: () => {
      return "finished";
    },
  },
  null
);

const fetchAuthorization = handleActions(
  {
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
      email: null,
      password: null,
    },
  }
);

const fetchRegistration = handleActions(
  {
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
  updateArticlesFetchingState,
  articlesFetchingState,
  authorizationState,
  addArticlesFetchingState,
  articlesFavouriteFetchingState,
  fetchAuthorization,
  authModalState,
  registrationState,
  fetchRegistration,
  articles,
});
