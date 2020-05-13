import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";
import reducers from "./reducers/reducers";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    padding: 100px;
    background-color: rgba(88,154,255,0.41);
    font-family: 'Impact', sans-serif;
    font-size: 16px;
    display:flex;
    justify-content:center;
  }
`;

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), devtoolMiddleware)
);

render(
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
