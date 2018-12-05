import React from 'react'
import ImageCard from '../Feed/ImageCard/ImageCard'
import PopUp from '../Feed/PopUp/PopUp'
import { Card } from 'semantic-ui-react';

const COMMENTS_URL = 'http://localhost:3000/comments'

export default class Explore extends React.Component {
    state = {
        images: [], 
        visible: false, 
        selectedPost: '', 
        newComment: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/images')
        .then(res => res.json())
        .then(images => this.filterImages(images.data))
    }

    filterImages = (images) => {
        let token = localStorage.getItem('token')
        let copyArr = images.filter((image) => image.attributes.poster.id !== Number(token))
        this.setState({
            images: copyArr
        })
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
        let arrayOfImages = this.state.images.map((image) => <ImageCard key={image.id} post={image} user={image.attributes.poster.username} handleClick={this.handleClick}/>)

        return (
            <div className="ui link cards">
                {this.state.visible ? <PopUp key={this.state.selectedPost.id} post={this.state.selectedPost.attributes} user={this.state.selectedPost.attributes.poster.username} handleClick={this.handleClick} addCommentToPhoto={(comment) => this.addComment(comment)} newComment={this.state.newComment} currentUser={this.props.currentUser}/> : null}
                <Card.Group itemsPerRow={3}>
                     {arrayOfImages}
                </Card.Group>
  	        </div>
        )
    }
}