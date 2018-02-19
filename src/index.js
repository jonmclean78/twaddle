import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "./data/axios";

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


//This is all the redux stuff

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import state from "./data/reducer";
import thunk from "redux-thunk";

// required for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  state,
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  applyMiddleware(thunk)
);

// axios.post("/", { 
// 	query: "/1.1/followers/list.json?screen_name=kfc"
// });




ReactDOM.render(
    // wrap the App component with the store Provider
    <Provider store={ store }>
        <App />
    </Provider>,

    document.getElementById("root")
);