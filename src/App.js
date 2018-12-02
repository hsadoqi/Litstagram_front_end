import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Feed from './Feed/Feed'
import Toolbar from './Toolbar/Toolbar'
import Login from './Login/Login'
import Signup from './Signup/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main style={{marginTop: '64px'}}>
        </main>
        <Route path='/feed' component={Feed}/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </div>
    );
  }
}

export default App;
