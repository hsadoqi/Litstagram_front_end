import React, { Component} from 'react'
import ImageCard from './ImageCard/ImageCard'
import { Card } from 'semantic-ui-react';
import './Feed.css'

export default class Feed extends Component {

    render(){

        let arrayOfPosts = this.props.posts.map((post) => 
            <ImageCard key={post.id} post={post} user={this.props.user}/>
            )

        return (
            <div className="ui link cards">
                <Card.Group itemsPerRow={3}>
                     {arrayOfPosts}
                </Card.Group>
  	        </div>
        )
    }
}