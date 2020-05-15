import { createAction } from "redux-actions";
import axiosInstance from "../heplers/axiosInstance.js";

export const fetchAuthorizationSuccess = createAction("AUTH_FETCH_SUCCESS");
export const fetchAuthorizationFailure = createAction("AUTH_FETCH_FAILURE");
export const fetchAuthorizationFinally = createAction("AUTH_FETCH_FINALLY");
export const fetchRegistrationSuccess = createAction("REG_FETCH_SUCCESS");
export const fetchRegistrationFailure = createAction("REG_FETCH_FAILURE");
export const fetchRegistrationFinally = createAction("REG_FETCH_FINALLY");

export const setAuthState = (history, { ...props }) => async (dispatch) => {
  const url = "/users/login";
  try {
    const response = await axiosInstance.post(url, {
      user: { ...props },
    });
    console.log(3545325);
    const { token, username } = response.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    dispatch(
      fetchAuthorizationSuccess({
        isLogged: true,
      })
    );
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

export const setRegState = (username, email, password) => async (dispatch) => {
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
