import React from 'react';
import initial from "./initial";

// import the ENTER_USERNAME Symbol
// so we can use it as a case in out switch staement
import { ENTER_USERNAME } from "./actions/actions";

// our enterUsername function
// we've updated index and value to get their values from the action
const enterUsername = (state, { username }) => state.setIn(["username"], "@" + username);

// add followers to the followers List
// const addFollowers = 



// we add ENTER_USERNAME as a case on the switch statement
export default (state = initial, action) => {
    switch (action.type) {
        case ENTER_USERNAME: return enterUsername(state, action);
        default: return state;
    }
};