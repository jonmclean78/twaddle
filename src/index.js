import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "./data/axios";

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


//This is all the redux stuff

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import state from "./data/reducer";

// required for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(state, composeEnhancers());

axios.get("/1.1/followers/list.json?screen_name=jonmclean");




ReactDOM.render(
    // wrap the App component with the store Provider
    <Provider store={ store }>
        <App />
    </Provider>,

    document.getElementById("root")
);