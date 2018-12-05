import React, { Component} from 'react'
import ImageCard from './ImageCard/ImageCard'
import { Card } from 'semantic-ui-react';
import './Feed.css'
import PopUp from './PopUp/PopUp'

const COMMENTS_URL = 'http://localhost:3000/comments'
// const IMAGES_URL = 'http://localhost:3000/images'
const LIKES_URL = 'http://localhost:3000/likes'

export default class Feed extends Component {
    state = {
        visible: false,
        selectedPost: '', 
        newComment: '',
        newLike: ''
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

    likePost = (image) => {
        fetch(LIKES_URL, {
            method: 'POST', 
            headers: {
                "Content-type": 'application/json', 
                "Accepts": 'application/json'
            }, 
            body: JSON.stringify({like_count: 1, image_id: image.id, liker_id: this.props.currentUser.user_id})
        }).then(res => res.json())
        .then(like => {
            this.setState({
                newLike: like
            })
        })
    }

    deleteLike = (like) => {
        fetch(`${LIKES_URL}/${like[0].id}`, {
            method: 'DELETE'
        })
    }


    render(){
        let arrayOfPosts = this.props.posts.map((post) =>
            <ImageCard key={post.id} post={post} user={this.props.user} handleClick={this.handleClick} likePost={this.likePost} currentUser={this.props.currentUser} deleteLike={this.deleteLike} newLike={this.state.newLike}/>
            )
        
        return (
            <div className="ui link cards">
                {this.state.visible ? <PopUp key={this.state.selectedPost.id} image={this.state.selectedPost} post={this.state.selectedPost.attributes} user={this.props.user} handleClick={this.handleClick} addCommentToPhoto={(comment) => this.addComment(comment)} newComment={this.state.newComment} currentUser={this.props.currentUser} likePost={this.likePost} newLike={this.state.newLike}/> : null}
                <Card.Group itemsPerRow={3}>
                     {arrayOfPosts}
                </Card.Group>
  	        </div>
        )
    }
}