import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import './ImageCard.css'

export default class ImageCard extends Component {

    render(){
        console.log(this.props)
        return (
            <div className="image-card">
              <Card>
                    <Image src={this.props.post.img}/>
                <Card.Content>
                <Card.Header>{this.props.post.caption}</Card.Header>
                <Card.Meta>
                    <span>{this.props.user}</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    22 Friends
                </Card.Content>
            </Card>
            </div>
        )
    }
}