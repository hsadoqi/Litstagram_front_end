import React, { Component} from 'react'
import ImageCard from './ImageCard/ImageCard'
import { Card } from 'semantic-ui-react';
import './Feed.css'
// import Modal from 'react-awesome-modal'
import PopUp from './PopUp/PopUp'

export default class Feed extends Component {
    state = {
        visible: false,
        selectedPost: '' 
    }

    handleClick = (e, post) => {
        // console.log(post)
        this.setState({
           visible: !this.state.visible,
           selectedPost: post
        })
    }

    render(){
        let arrayOfPosts = this.props.posts.map((post) =>
            <ImageCard key={post.id} post={post} user={this.props.user} handleClick={this.handleClick}/>
            )
        // console.log(this.props.posts)
        // console.log(this.state.selectedPost)

        return (
            <div className="ui link cards">
                {this.state.visible ? <PopUp key={this.state.selectedPost.id} post={this.state.selectedPost} user={this.props.user} handleClick={this.handleClick}/> : null}
                <Card.Group itemsPerRow={3}>
                     {arrayOfPosts}
                </Card.Group>
  	        </div>
        )
    }
}