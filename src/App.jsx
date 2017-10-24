import React, { Component } from 'react';


import { Range } from "immutable";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Mainpage from './components/Mainpage';

export default () => (
    <Router>
        <div>
           <Mainpage />
        </div>
    </Router>
);

