import React, { Component } from 'react';
import './App.css';
import { Route, withRouter} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
import Toolbar from './Toolbar/Toolbar'
import Login from './Login/LogIn'
import Signup from './Signup/Signup'
import Explore from './Explore/Explore'
import UploadPhoto from './UploadPhoto/UploadPhoto'

const USERS_URL = 'http://localhost:3000/users'

class App extends Component {
  state = {
    user : null
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if(token){
      // must add fetch for the proper api that holds that particular user's information
      fetch('http://localhost:3000/current_user', {
        headers: {
          "Content-type": 'application/json',
          "Accepts": 'application/json',
          Authorization: `${token}`
        }
      }).then(res => res.json())
      .then(user => {
            this.setState({ user: user })
            // this.props.history.push(`/users/${token}/profile`)
      })
    } else {
      this.props.history.push('/')
    }
  }

//Log In Functionality

logInSubmitHandler = (e, userInfo) => {
  e.preventDefault()
  this.logInUser(userInfo)
}

logInUser = userInfo => {
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      "Content-type": 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({user: userInfo })
  }).then(res => res.json())
  .then(user => {
          this.setState({
            user: user
          })
          localStorage.setItem("token", user.user_id)
          this.props.history.push(`/users/${user.user_id}/profile`)
      })
}

// Sign Up Functionality

signUpSubmitHandler = (e, userInfo) => {
  e.preventDefault()
  this.createUser(userInfo)
}

createUser = userInfo => {
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
    // console.log(this.state)
    return (
      <div className="App">
        <Toolbar user={this.state.user}/>
        <main style={{marginTop: '64px'}}>
        </main>
        <Route path='/users/:id/profile' render={()=> (<Profile />)}/>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' render={() => (<Login handleSubmit={this.logInSubmitHandler}/>)}/>
        <Route path='/signup' render={() => (<Signup handleSubmit={this.signUpSubmitHandler}/>)}/>
        <Route path='/explore' render={()=> (<Explore/>)} />
        <Route path='/addphoto' render={() => (<UploadPhoto user={this.state.user}/>)}/>
      </div>
    );
  }
}

export default withRouter(App);
