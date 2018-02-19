import { fromJS } from "immutable";
import axios from "../axios";

import {
	getUser,
	getFollowers,
} from "../actions/actions";

// // get the Bio and the Profile Pic for the username that is being entered
// export const fetchUser = (username) => (dispatch, getState) => {
// 	if (!getState().getIn(["username", username])) {
// 		axios.post("/", { 
// 		query: "/1.1/users/show.json?screen_name=barackobama" 
//         });
// 	}
// }

// get the followers for the username that has been entered
export const fetchFollowers = (username) => (dispatch, getState) => {
	if (!getState().getIn(["username", username])) {
		axios.get("/1.1/followers/list.json?screen_name=" + {username}.then(response => {
            dispatch(getFollowers(fromJS(response.data)));
        });
	}
}

// + username.then(response => {
//             dispatch(getFollowers(fromJS(response.data)));




