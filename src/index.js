import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";
import reducers from "./reducers/reducers";

const GlobalStyle = createGlobalStyle`
	@font-face {
	font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');
 	}
 	@font-face {
 	font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpOqc.woff2) format('woff2');
 	}

*{
  box-sizing: border-box;
}
  body {
    font-family: "Open Sans";
    font-weight: 400;
    width: 100%;
    padding: 50px;
    background-color: rgba(88,154,255,0.41);
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

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
