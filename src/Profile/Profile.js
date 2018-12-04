import React, { Component } from 'react'
import axios from 'axios'
import './Profile.css'
import Feed from '../Feed/Feed'

let userId 
const USERS_URL = 'http://localhost:3000/users'

export default class Profile extends Component {
    state = {
        username: '',
        fullName: '',
        posts: [],
        img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
    }

    componentDidMount(){
        fetch(`${USERS_URL}/${userId}`)
        .then(res => res.json())
        .then(user => {
            this.setState({
            username: user.data.attributes.username, 
            fullName: user.data.attributes.fullname, 
            posts: user.data.attributes.posts, 
        })
    })
    }

    render(){
        userId = localStorage.getItem('token')
        console.log(typeof userId)
        console.log(this.state)

        return (
            <React.Fragment>
                <div className='profile-info'>
                    <img className="profile-icon" src={this.state.img} alt=""/>
                    <div className="profile-details">
                        <h3>{this.state.username}</h3>
                        <p>{this.state.posts.length} Posts </p>
                        <h4>{this.state.firstName} {this.state.lastName}</h4>
                        <h5>Bio:</h5>
                        <p>I like pool.</p>
                    </div>
                </div>
                <Feed posts={this.state.posts} user={this.state.username}/>
            </React.Fragment>
        )
    }
}