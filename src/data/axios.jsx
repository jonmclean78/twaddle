import axios from "axios";

export default axios.create({
    // update with your username 
    baseURL: "https://api.twitter.com",

    headers: {
    	"Accept": "application/json",
		"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAKdl2wAAAAAAdLZn0w2q0A8hX4MUq4QGqA%2Fsymw%3Dp7m9Xz5mInQrV28g9k9QMnrsqQunTETPR7UcKNc3yWJXDRu4bf"
	},
});

