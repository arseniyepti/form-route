import { createAction } from "redux-actions";
import { axiosInstanceAuth } from "../heplers/axiosInstance.js";

export const fetchAuthorizationRequest = createAction("AUTH_FETCH_REQUEST");
export const fetchAuthorizationSuccess = createAction("AUTH_FETCH_SUCCESS");
export const fetchAuthorizationFailure = createAction("AUTH_FETCH_FAILURE");

export const fetchRegistrationRequest = createAction("REG_FETCH_REQUEST");
export const fetchRegistrationFailure = createAction("REG_FETCH_FAILURE");
export const fetchRegistrationSuccess = createAction("REG_FETCH_SUCCESS");

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
export const fetchAddArticleRequest = createAction("ADD_FETCH_REQUEST");

export const fetchUpdateArticleSuccess = createAction("UPDATE_FETCH_SUCCESS");
export const fetchUpdateArticleFailure = createAction("UPDATE_FETCH_FAILURE");
export const fetchUpdateArticleRequest = createAction("UPDATE_FETCH_REQUEST");

export const fetchDeleteArticleSuccess = createAction("DELETE_FETCH_SUCCESS");
export const fetchDeleteArticleFailure = createAction("DELETE_FETCH_FAILURE");

export const authModalStateSuccess = createAction("AUTH_STATE_SUCCESS");
export const authModalStateFailure = createAction("AUTH_STATE_FAILURE");

export const fetchAuthorization = ({ email, password }) => async (dispatch) => {
  dispatch(fetchAuthorizationRequest());
  const url = "/users/login";
  try {
    const response = await axiosInstanceAuth.post(url, {
      user: { email, password },
    });
    const { token, username } = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    dispatch(fetchAuthorizationSuccess());
  } catch (error) {
    const emailOrPassword = error.response.data.errors["email or password"];
    dispatch(
      fetchAuthorizationFailure({
        emailOrPassword,
      })
    );
  }
};

export const fetchRegistration = (username, email, password) => async (
  dispatch
) => {
  dispatch(fetchRegistrationRequest());
  const url = "/users";
  try {
    await axiosInstanceAuth.post(url, {
      user: {
        username,
        email,
        password,
      },
    });
    dispatch(fetchRegistrationSuccess());
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
  }
};

export const fetchArticles = (count = 0) => async (dispatch) => {
  const url = `/articles?limit=10&offset=${count}`;
  try {
    const {
      data: { articles, articlesCount },
    } = await axiosInstanceAuth.get(url);
    dispatch(fetchArticlesSuccess({ articles, articlesCount }));
  } catch (error) {
    dispatch(fetchArticlesFailure());
  }
};

export const fetchFavouriteArticle = (slug, favorite) => async (dispatch) => {
  const url = `/articles/${slug}/favorite`;
  try {
    return favorite
      ? await axiosInstanceAuth.delete(url)
      : await axiosInstanceAuth.post(url);
  } catch (error) {
    dispatch(fetchFavouriteArticleFailure());
    dispatch(fetchFavouriteArticleFailure());
  }
};

export const fetchAddArticles = (
  { title, description, body },
  tagList
) => async (dispatch) => {
  dispatch(fetchAddArticleRequest());
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
    // if (error.response.status === 401) {
    // 	dispatch(authModalStateFailure());
    // }
    dispatch(fetchAddArticleFailure(error.response.status));
  }
};

export const fetchUpdateArticles = (
  { title, description, body },
  tagList,
  slug
) => async (dispatch) => {
  dispatch(fetchUpdateArticleRequest());
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
    // if (error.response.status === 401) {
    // 	dispatch(authModalStateFailure());
    // }
    dispatch(fetchUpdateArticleFailure(error.response.status));
  }
};

export const fetchDeleteArticles = (slug) => async (dispatch) => {
  const url = `/articles/${slug}`;
  try {
    await axiosInstanceAuth.delete(url);
    dispatch(fetchDeleteArticleSuccess({ slug }));
  } catch (error) {
    // if (error.response.status === 401) {
    // 	dispatch(authModalStateFailure());
    // }
    dispatch(fetchDeleteArticleFailure());
  }
};
