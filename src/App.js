import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
import Toolbar from './Toolbar/Toolbar'
import Login from './Login/LogIn'
import Signup from './Signup/Signup'

const USERS_URL = 'http://localhost:3000/users'

class App extends Component {
  state = {
    user : null
  }

  // componentDidMount = () => {
  //   let token = localStorage.getItem('token')
  //   if(token){
  //     // must add fetch for the proper api that holds that particular user's information
  //     fetch(`http://localhost:localhost:3000/api/v1/current_user`, {
  //       method: 'POST', 
  //       headers: {
  //         "Content-type": 'application/json', 
  //         "Accepts": 'application/json'
  //       }, 
  //       body: JSON.stringify({ something: '' })
      
  //     })
  //   } else {
  //     this.props.history.push('/signup')
  //   }
  // }

logInSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    fetch(USERS_URL)
    .then(res => res.json())
    .then(console.log)
    // .then(user => user.data.data.map((user) => {
    //     if(user.attributes.username === this.state.username && user.attributes.password === this.state.password){
    //         return this.props.history.replace(`/${user.id}/profile`)
    //     } else {
    //         console.log('wrong')
    //         // fix error messages
    //     }
    // }))
}

signUpSubmitHandler = (e, userInfo) => {
  e.preventDefault()
  this.createUser(userInfo)
}

createUser = userInfo => {
  console.log(userInfo)
  console.log(USERS_URL)
  fetch(USERS_URL, {
    method: 'POST', 
    headers: {
      "Content-type": 'application/json', 
      "Accepts": 'application/json'
    }, 
    body: JSON.stringify({
      user: {
        fullname: userInfo.fullName,
        username: userInfo.username,
        password: userInfo.password
      }
    })
  }).then(res => res.json())
  .then(user => {
    localStorage.setItem('token', user.id)
    this.setState({
      user: user
    })
    this.props.history.push(`/users/${user.id}/profile`)
  })
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Toolbar user={this.state.user}/>
        <main style={{marginTop: '64px'}}>
        </main>
        <Route path='/users/:id/profile' render={()=> (<Profile user={this.state.user}/>)}/>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' render={() => (<Signup handleSubmit={this.signUpSubmitHandler}/>)}/>
      </div>
    );
  }
}

export default withRouter(App);
