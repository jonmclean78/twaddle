import React, { Component } from "react";

export default ({ onClick}) => (
    <button 
        className={ "btn btn-primary" }
        onClick={onClick}
    >
        Get Twitter Followers
    </button>
);
