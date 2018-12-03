import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
import Toolbar from './Toolbar/Toolbar'
import Login from './Login/LogIn'
import Signup from './Signup/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main style={{marginTop: '64px'}}>
        </main>
        <Route path='/:id/profile' component={Profile}/>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </div>
    );
  }
}

export default App;
