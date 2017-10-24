import React, { Component } from "react";
import Input from "./Input"
import Button from "./Button";



class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ""};
		this.update = this.update.bind(this);
		this.clicked = this.clicked.bind(this);
	}

	update(e) {
    this.setState({ value: e.target.value });
    let user = this.state.value;
    console.log(user);
}

	clicked() {
		return (
			<p>{this.state.value}</p>
		)
	}

    render() {
        return (
            <div>
                <Input />
               	<Button/>
            </div>
        );
    }
}

export default Form;