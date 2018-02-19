import axios from "../axios";

// update initial state with current username

export const ENTER_USERNAME = Symbol("ENTER_USERNAME");

export const enterUsername = (username) => ({
    type: ENTER_USERNAME,
    username,
});

// twitter api request to get profile pic for username
// export const GET_USER = Symbol("GET_USER");

// export const getUser = (username) => ({
//     type: GET_USER,
//     username,
//     // bio,
//     // pic,
// });


// twitter api request to get followers for username
export const GET_FOLLOWERS = Symbol("GET_FOLLOWERS");

const getF = (username) => axios.post("/", { 
	query: "/1.1/followers/list.json?screen_name="+ username
});

export const getFollowers = (username) => {
	return (dispatch, getState) => {
		dispatch({ type: 'LOADER_ON' });
		getF(username).then(r => dispatch({	
		    type: GET_FOLLOWERS,
		    payload: r
		}))

	}
}


// // an action to deal with and display followers when they have been received...
// export const RECEIVE_FOLLOWERS = Symbol("RECEIVE_FOLLOWERS");

// export const receiveFollowers = (username) => ({
//     type: RECEIVE_FOLLOWERS,
//     username,
//     // followers: json.data.children.map(child => child.data),
// });

// // an action for failed api requests?