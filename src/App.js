import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Feed from './components/Feed'

class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/feed' component={Feed}/>
        </Switch>
      </div>
    );
  }
}

export default App;
