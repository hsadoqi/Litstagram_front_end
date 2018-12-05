import React, { Component} from 'react'
import ImageCard from './ImageCard/ImageCard'
import { Card } from 'semantic-ui-react';
import './Feed.css'
import PopUp from './PopUp/PopUp'

const COMMENTS_URL = 'http://localhost:3000/comments'

export default class Feed extends Component {
    state = {
        visible: false,
        selectedPost: '', 
        newComment: ''
    }

    handleClick = (e, post) => {
        if(!this.state.visible){
                this.setState({
                visible: !this.state.visible,
                selectedPost: post
                })
        } else {
            this.setState({
                visible: !this.state.visible
            })
        }
    }

    addComment = (comment) => {
        fetch(COMMENTS_URL, {
          method: 'POST', 
          headers: {
            "Content-type": 'application/json', 
            "Accepts": 'application/json'
          }, 
          body: JSON.stringify({content: comment, commenter_id: this.props.currentUser.user_id, image_id: Number(this.state.selectedPost.id)})
        }).then(res => res.json())
        .then(comment => {
            this.setState({
                newComment: comment
            })
        })
      }


    render(){
        let arrayOfPosts = this.props.posts.map((post) =>
            <ImageCard key={post.id} post={post} user={this.props.user} handleClick={this.handleClick}/>
            )
        
        return (
            <div className="ui link cards">
                {this.state.visible ? <PopUp key={this.state.selectedPost.id} post={this.state.selectedPost.attributes} user={this.props.user} handleClick={this.handleClick} addCommentToPhoto={(comment) => this.addComment(comment)} newComment={this.state.newComment} currentUser={this.props.currentUser}/> : null}
                <Card.Group itemsPerRow={3}>
                     {arrayOfPosts}
                </Card.Group>
  	        </div>
        )
    }
}