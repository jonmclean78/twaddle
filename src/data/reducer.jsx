import React from 'react';
import initial from "./initial";

// import the ENTER_USERNAME Symbol
// so we can use it as a case in the switch staement
import { ENTER_USERNAME, GET_FOLLOWERS } from "./actions/actions";

// our enterUsername function
// we've updated index and value to get their values from the action
const enterUsername = (state, { username }) => state.setIn(["username"], username);

// import the GET_FOLLOWERS symbol
// so we can use it as a case in the switch statement



// we add ENTER_USERNAME as a case on the switch statement
export default (state = initial, action) => {
    switch (action.type) {
        case ENTER_USERNAME: return enterUsername(state, action);
        case GET_FOLLOWERS: 
        	return state.setIn(["users"], action.payload.data.users);
        default: return state;
    }
};