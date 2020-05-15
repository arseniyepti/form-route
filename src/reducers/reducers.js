import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";

const authState = handleActions(
  {
    [actions.fetchAuthorizationSuccess]: (state, { payload: { isLogged } }) => {
      return { ...state, isLogged };
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
    isLogged: false,
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

export default combineReducers({
  authState,
  regState,
});
