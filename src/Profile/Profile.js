import React, { Component } from 'react'
import axios from 'axios'
import './Profile.css'
import Feed from '../Feed/Feed'

let userId 
// const USERS_URL = 'http://localhost:3000/users'

export default class Profile extends Component {
    state = {
        username: '',
        firstName: '',
        lastName: '',
        posts: [],
        img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/users/${userId}`)
        .then(user => {
            let attributes = user.data.data.attributes
            this.setState({
                firstName: attributes["first-name"],
                lastName: attributes["last-name"],
                username: attributes.username, 
                posts: attributes.posts
            })
        })
    }

    render(){
        userId = this.props.history.location.pathname[1]
        console.log(this.state.posts)
        return (
            <React.Fragment>
                <div className='profile-info'>
                    <img className="profile-icon" src={this.state.img} alt=""/>
                    <div className="profile-details">
                        <h3>{this.state.username}</h3>
                        <p>{this.state.posts.length} Posts </p>
                        <h4>{this.state.firstName} {this.state.lastName}</h4>
                    </div>
                </div>
                <Feed posts={this.state.posts} user={this.state.username}/>
            </React.Fragment>
        )
    }
}