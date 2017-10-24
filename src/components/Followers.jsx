import React, { Component } from "react";
import Loader from "./Loader"

class Followers extends Component {
	componentDidMount()
    {
        this.props.onMount();
    }

    render () {
    	let { loading, titles } = this.props;

        return loading ? <Loader /> : (
            <div>
                     <p>No articles found</p>
            </div>
        );
    }
}

export default Followers;