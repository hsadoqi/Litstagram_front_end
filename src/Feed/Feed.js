import React, { Component} from 'react'
import ImageCard from './ImageCard/ImageCard'
import { Card } from 'semantic-ui-react';
import './Feed.css'
// import Modal from 'react-awesome-modal'
import PopUp from './PopUp/PopUp'
// import axios from 'axios'

export default class Feed extends Component {
    state = {
        visible: false,
        selectedPost: '' 
    }

    handleClick = (e, post) => {
        // console.log(post)
        console.log(post)
        if(!this.state.visible){
                this.setState({
                visible: !this.state.visible,
                selectedPost: post.attributes
                })
        } else {
            this.setState({
                visible: !this.state.visible
            })
        }
    }

    render(){
        let arrayOfPosts = this.props.posts.map((post) =>
            <ImageCard key={post.id} post={post} user={this.props.user} handleClick={this.handleClick}/>
            )
        
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