import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";

const authState = handleActions(
  {
    [actions.setAuthorizationSuccess]: (
      state,
      { payload: { isLogged, user } }
    ) => {
      return { ...state, isLogged, user };
    },
    [actions.setAuthUIState]: (state, { payload: { authorization } }) => {
      return { ...state, UIState: { ...state.UIState, authorization } };
    },
    [actions.AuthBtnLoading]: (state, { payload: { loading } }) => {
      return { ...state, UIState: { ...state.UIState, loading } };
    },
  },
  {
    isLogged: false,
    UIState: {
      loading: false,
      authorization: true,
    },
  }
);

const regState = handleActions(
  {
    [actions.setRegistrationSuccess]: (
      state,
      { payload: { registration } }
    ) => {
      return { ...state, UIState: { ...state.UIState, registration } };
    },
    [actions.RegBtnLoading]: (state, { payload: { loading } }) => {
      return { ...state, UIState: { ...state.UIState, loading } };
    },
  },
  {
    UIState: {
      loading: false,
      registration: undefined,
    },
  }
);

export default combineReducers({
  authState,
  regState,
});
