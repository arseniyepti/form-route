import { createAction } from "redux-actions";
import { axiosInstanceAuth } from "../heplers/axiosInstance.js";

export const fetchAuthorizationFailure = createAction("AUTH_FETCH_FAILURE");

export const fetchRegistrationFailure = createAction("REG_FETCH_FAILURE");

export const fetchArticlesSuccess = createAction("ARTICLES_FETCH_SUCCESS");

export const fetchFavouriteArticleSuccess = createAction(
  "FAVOURITE_FETCH_SUCCESS"
);
export const fetchFavouriteArticleFailure = createAction(
  "FAVOURITE_FETCH_FAILURE"
);

export const fetchAddEditArticleFailure = createAction(
  "ADD_EDIT_FETCH_FAILURE"
);

export const fetchDeleteArticleSuccess = createAction("DELETE_FETCH_SUCCESS");

export const authModalStateSuccess = createAction("AUTH_STATE_SUCCESS");
export const authModalStateFailure = createAction("AUTH_STATE_FAILURE");

export const fetchAuthorization = ({ email, password }) => async (dispatch) => {
  const url = "/users/login";
  try {
    const response = await axiosInstanceAuth.post(url, {
      user: { email, password },
    });
    const { token, username } = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return true;
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
  const url = "/users";
  try {
    await axiosInstanceAuth.post(url, {
      user: {
        username,
        email,
        password,
      },
    });
    return true;
  } catch (error) {
    const { email, password, username } = error.response.data.errors;
    console.log(email, password, username);
    dispatch(
      fetchRegistrationFailure({
        email,
        password,
        username,
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
  } catch (error) {}
};

export const fetchFavouriteArticle = (slug, favorite) => async (dispatch) => {
  const url = `/articles/${slug}/favorite`;
  try {
    favorite
      ? await axiosInstanceAuth.delete(url)
      : await axiosInstanceAuth.post(url);
    return true;
  } catch (error) {
    dispatch(fetchFavouriteArticleFailure());
  }
};

export const fetchAddEditArticles = (
  { title, description, body },
  tagList,
  action,
  slug = ""
) => async () => {
  const data = {
    article: {
      title,
      description,
      body,
      tagList,
    },
  };
  const url = action === "add" ? `/articles` : `/articles/${slug}`;
  try {
    action === "add"
      ? await axiosInstanceAuth.post(url, data)
      : await axiosInstanceAuth.put(url, data);
    return true;
  } catch (error) {
    return error.response.status;
  }
};

export const fetchDeleteArticles = (slug) => async (dispatch) => {
  const url = `/articles/${slug}`;
  try {
    await axiosInstanceAuth.delete(url);
    dispatch(fetchDeleteArticleSuccess({ slug }));
  } catch (error) {}
};
