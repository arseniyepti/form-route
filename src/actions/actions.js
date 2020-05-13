import { createAction } from "redux-actions";
import axiosInstance from "../heplers/axiosInstance.js";

export const setAuthorizationSuccess = createAction("AUTH_STATE_");
export const setRegistrationSuccess = createAction("REG_STATE");
export const setAuthUIState = createAction("AUTH_UI_STATE");
export const AuthBtnLoading = createAction("STOP_AUTH_BTN_LOADING");
export const RegBtnLoading = createAction("STOP_REG_BTN_LOADING");

export const setAuthState = (history, { ...props }) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      user: { ...props },
    });
    if (response.status === 200) {
      dispatch(
        setAuthorizationSuccess({
          isLogged: true,
          user: response.data.user,
        })
      );
      history.push("/form-route/");
    }
  } catch (error) {
    dispatch(
      setAuthUIState({
        authorization: false,
      })
    );
  } finally {
    dispatch(
      AuthBtnLoading({
        loading: false,
      })
    );
  }
};

export const setRegState = (name, email, password) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/users", {
      user: {
        username: name,
        email,
        password,
      },
    });
    if (response.status === 200) {
      dispatch(
        setRegistrationSuccess({
          registration: true,
        })
      );
    }
  } catch (error) {
    dispatch(
      setRegistrationSuccess({
        registration: false,
      })
    );
  } finally {
    dispatch(
      RegBtnLoading({
        loading: false,
      })
    );
  }
};
