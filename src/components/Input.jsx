import React from 'react';

export default ({onChange, username }) => (
    <div className="form-group">
    	<label> Enter a twitter handle: </label>
        <input className="form-control" value={username} onChange={ onChange }/>
    </div>
);


