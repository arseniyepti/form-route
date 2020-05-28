import { createAction } from "redux-actions";
import { axiosInstance, axiosInstanceAuth } from "../heplers/axiosInstance.js";

export const fetchAuthorizationSuccess = createAction("AUTH_FETCH_SUCCESS");
export const fetchAuthorizationFailure = createAction("AUTH_FETCH_FAILURE");
export const fetchAuthorizationFinally = createAction("AUTH_FETCH_FINALLY");

export const fetchRegistrationSuccess = createAction("REG_FETCH_SUCCESS");
export const fetchRegistrationFailure = createAction("REG_FETCH_FAILURE");
export const fetchRegistrationFinally = createAction("REG_FETCH_FINALLY");

export const fetchArticlesSuccess = createAction("ARTICLES_FETCH_SUCCESS");
export const fetchArticlesFailure = createAction("ARTICLES_FETCH_FAILURE");

export const fetchFavouriteArticleSuccess = createAction(
  "FAVOURITE_FETCH_SUCCESS"
);
export const fetchFavouriteArticleFailure = createAction(
  "FAVOURITE_FETCH_FAILURE"
);

export const fetchAddArticleSuccess = createAction("ADD_FETCH_SUCCESS");
export const fetchAddArticleFailure = createAction("ADD_FETCH_FAILURE");
export const fetchAddArticleFinally = createAction("ADD_FETCH_FINALLY");

export const fetchUpdateArticleSuccess = createAction("UPDATE_FETCH_SUCCESS");
export const fetchUpdateArticleFailure = createAction("UPDATE_FETCH_FAILURE");
export const fetchUpdateArticleFinally = createAction("UPDATE_FETCH_FINALLY");

export const fetchDeleteArticleSuccess = createAction("DELETE_FETCH_SUCCESS");
export const fetchDeleteArticleFailure = createAction("DELETE_FETCH_FAILURE");
export const fetchDeleteArticleFinally = createAction("DELETE_FETCH_FINALLY");

export const addTag = createAction("ADD_TAG");
export const changeTag = createAction("CHANGE_TAG");
export const clearTags = createAction("CLEAR_TAG");
export const authModalStateSuccess = createAction("AUTH_STATE_SUCCESS");
export const authModalStateFailure = createAction("AUTH_STATE_FAILURE");

export const fetchAuthorization = ({ ...props }) => async (dispatch) => {
  const url = "/users/login";
  try {
    const response = await axiosInstance.post(url, {
      user: { ...props },
    });
    const { token, username } = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("name", username);
    return true;
  } catch (error) {
    const emailOrPassword = error.response.data.errors["email or password"];
    dispatch(
      fetchAuthorizationFailure({
        emailOrPassword,
        authorization: false,
      })
    );
  } finally {
    dispatch(
      fetchAuthorizationFinally({
        loading: false,
      })
    );
  }
};

export const fetchFavouriteArticle = (slug, favorite) => async (dispatch) => {
  const url = `/articles/${slug}/favorite`;
  try {
    const {
      data: {
        article: { favoritesCount, favorited, slug },
      },
    } = favorite
      ? await axiosInstanceAuth.delete(url)
      : await axiosInstanceAuth.post(url);
    dispatch(fetchFavouriteArticleSuccess({ favoritesCount, slug, favorited }));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(authModalStateFailure());
    }
    dispatch(fetchFavouriteArticleFailure());
  }
};

export const fetchRegistration = (username, email, password) => async (
  dispatch
) => {
  const url = "/users";
  try {
    await axiosInstance.post(url, {
      user: {
        username,
        email,
        password,
      },
    });
    dispatch(
      fetchRegistrationSuccess({
        registration: true,
      })
    );
    return true;
  } catch (error) {
    const { email, password, username } = error.response.data.errors;
    dispatch(
      fetchRegistrationFailure({
        email,
        password,
        username,
        registration: false,
      })
    );
    return false;
  } finally {
    dispatch(
      fetchRegistrationFinally({
        loading: false,
      })
    );
  }
};

export const fetchArticles = () => async (dispatch) => {
  const count = sessionStorage.getItem("count");
  const url = `/articles?limit=10&offset=${count}`;
  try {
    const {
      data: { articles, articlesCount },
    } = await axiosInstance.get(url);
    dispatch(fetchArticlesSuccess({ articles, articlesCount }));
  } catch (error) {
    dispatch(fetchArticlesFailure());
  }
};

export const fetchAddArticles = (
  { title, description, body },
  tagList
) => async (dispatch) => {
  const url = `/articles`;
  try {
    await axiosInstanceAuth.post(url, {
      article: {
        title,
        description,
        body,
        tagList,
      },
    });
    dispatch(fetchAddArticleSuccess());
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(authModalStateFailure());
    }
    dispatch(fetchAddArticleFailure(error.response.status));
  } finally {
    dispatch(fetchAddArticleFinally({ loading: false }));
  }
};

export const fetchUpdateArticles = (
  { title, description, body },
  tagList,
  slug
) => async (dispatch) => {
  const url = `/articles/${slug}`;
  try {
    await axiosInstanceAuth.put(url, {
      article: {
        title,
        description,
        body,
        tagList,
      },
    });
    dispatch(fetchUpdateArticleSuccess());
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(authModalStateFailure());
    }
    dispatch(fetchUpdateArticleFailure(error.response.status));
  } finally {
    dispatch(fetchUpdateArticleFinally({ loading: false }));
  }
};

export const fetchDeleteArticles = (slug) => async (dispatch) => {
  const url = `/articles/${slug}`;
  try {
    await axiosInstanceAuth.delete(url);
    dispatch(fetchDeleteArticleSuccess({ slug }));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(authModalStateFailure());
    }
    dispatch(fetchDeleteArticleFailure());
  } finally {
    dispatch(fetchDeleteArticleFinally());
  }
};
