import React from 'react';
import Input from "../containers/Input"

export default ({username, onClick, onChange}) => (
	<div>
		<p className="App-intro">
			<Input />
		</p>
		<div className="card">
				
				<div className="card-block">
					<p>You are searching for:</p>
					<h4 className="card-title" onChange={onChange}>{ username }</h4>
					<img className="card-img-top" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Twitter Profile Picture" />
					<p className="card-text">Twitter Bio to appear here on click</p>

					<button className="btn btn-primary" disabled={ username ? username.length < 2 : null } onClick={onClick}>Get Twitter Followers...</button>
					<a className="btn btn-danger" disabled={ username ? username.length < 2 : null } href="/">Reset</a>
				</div>
		</div>
	</div>
);
