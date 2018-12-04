import React from 'react'
import ImageCard from '../Feed/ImageCard/ImageCard'
import PopUp from '../Feed/PopUp/PopUp'
import { Card } from 'semantic-ui-react';

export default class Explore extends React.Component {
    state = {
        images: [], 
        visible: false, 
        selectedPost: ''
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

    render(){

        let arrayOfImages = this.state.images.map((image) => <ImageCard key={image.id} post={image.attributes}/>)
        console.log(this.state)
        console.log(arrayOfImages)
        return (
            <div className="ui link cards">
                {this.state.visible ? <PopUp key={this.state.selectedPost.id} /> : null}
                <Card.Group itemsPerRow={3}>
                     {arrayOfImages}
                </Card.Group>
  	        </div>
        )
    }
}