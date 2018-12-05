import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import './ImageCard.css'

let image 

export default class ImageCard extends Component {
    state = {
        image: null
    }

    componentDidMount(){
        fetch(`http://localhost:3000/images/${this.props.post.id}`)
        .then(res => res.json())
        .then(image => {
            this.setState({
                image: image.data
            })
        })
    }

    render(){
        if(this.state.image){
            image = this.state.image.attributes
            console.log(image)
            // let arrayOfLikers = image.likers.map((liker) => liker.username)

            return (
                <Card onClick={(e) => this.props.handleClick(e, this.state.image)}>
                        <Image src={image.img}/>
                    <Card.Content>
                    <Card.Header>{image.caption}</Card.Header>
                    <Card.Meta>
                        <span>{image.poster.username}</span>
                    </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon><span role="img" aria-label="Like">🖤</span> </Icon>
                        {image.likes.length} Likes and {image.comments.length} Comments
                    </Card.Content>
                </Card>
            )} else {
            return(<div>Loading</div>)
        }
    }
}