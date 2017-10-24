import React from 'react';
import { Map, List } from "immutable";

export default Map({
	//twitter screen
	username: "@",
	// have followers been loaded?
	loaded: false,
	// list of followers (should this be a list or a map though??)
	followers: List([]),
});