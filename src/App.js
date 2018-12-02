import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Feed from './Feed/Feed'
import Toolbar from './Toolbar/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main style={{marginTop: '64px'}}>
        </main>
        <Switch>
          <Route path='/feed' component={Feed}/>
          <Route path='/homepage' component={Homepage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
