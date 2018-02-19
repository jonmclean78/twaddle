import React, { Component } from "react";
import Loader from "./Loader"

class Followers extends Component {
	componentDidMount()
    {
        //this.props.onMount();
    }
    componentWillUpdate(nextProps){
                console.log(nextProps.users)

    }
    render () {
    	let { users } = this.props;
        //console.log('mounted')
        return typeof users == 'undefined' ? 'No Users' : users.map(u =>
            <div key={u}>{u.name}</div>
        );
    }
}

export default Followers;