import React, { Component } from 'react';
// import logo from '../twaddle.png';
import '../App.css';

import Input from '../containers/Input';
import Button from '../components/Button';
import Username from '../containers/Username';
import Followers from '../containers/Followers';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          
          <h1 className="App-title">Twaddle</h1>
        </header>
        
        <div className="col-md-4">
            <Username />
        </div>
      
        <div className="col-md-8">
          <p className="App-intro">        
            Followers List:
          </p>
          
          <div className="well">
          </div>
        
        </div>    

      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />