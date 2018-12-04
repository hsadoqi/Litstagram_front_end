import React, { Component } from 'react'
// import axios from 'axios'
import './Profile.css'
import Feed from '../Feed/Feed'
import { withRouter } from 'react-router-dom'

// let userId 
const USERS_URL = 'http://localhost:3000/users'

class Profile extends Component {
    state = {
        id: '',
        username: '',
        fullName: '',
        posts: [],
        img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
    }

    componentDidMount(){
        let id = Number(this.props.match.params.id)
        console.log(id)

        fetch(`${USERS_URL}/${id}`)
        .then(res => res.json())
        .then(user => {
            this.setState({
                id: user.data.id, 
                fullName: user.data.attributes.fullname, 
                username: user.data.attributes.username,
                posts: user.data.attributes.posts
            })
        })
        // use match params
        // on mount make a fetch to that user_id from the location props
        // and set that user in profile's state
        // if we want to be able to view other's profiles

        // console.log(this.props.location)

        // this.setState({
        //     user: {
        //         id: this.props.user.user_id, 
        //         username: this.props.user.username, 
        //         fullName: this.props.user.fullname
        //     }
        // })
        // this.getUserInfo()
    }

    render(){
        console.log(this.state)
        console.log(this.props.user)
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

export default withRouter(Profile)