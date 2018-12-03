import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import './ImageCard.css'
// import PopUp from './PopUp/PopUp'

export default class ImageCard extends Component {

    // state = {
    //     visible: false 
    // }

    // handleClick = (e) => {
    //     this.setState({
    //        visible: !this.state.visible
    //     })
    // }


    render(){
        return (
              <Card onClick={(e) => this.props.handleClick(e, this.props.post)}>
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
        )
    }
}