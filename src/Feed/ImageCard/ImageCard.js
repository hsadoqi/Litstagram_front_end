import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import './ImageCard.css'

let image 
let likeEmoji
let favorite

export default class ImageCard extends Component {
    state = {
        image: null,
        likers: [], 
        commenters: [], 
        favorite: false,
        likes: null
    }

    componentDidMount(){
        fetch(`http://localhost:3000/images/${this.props.post.id}`)
        .then(res => res.json())
        .then(image => {
            let likedUser = image.data.attributes.likers.filter((liker) => liker.username === this.props.currentUser.username)
            if(likedUser.length !== 0) {favorite = true} else {favorite = false}
            this.setState({
                image: image.data, 
                likers: image.data.attributes.likers,
                commenters: image.data.attributes.commenters,
                favorite: favorite,
                likes: image.data.attributes.likes
            })
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        if(this.state.favorite === false){
            this.favoritePost()
        } else {
            this.deletePost()
        }
    }

    favoritePost = () => {
            this.props.likePost(this.state.image)
            this.setState({
                favorite: !this.state.favorite,
                likers: [...this.state.likers, this.props.currentUser],
                likes: [...this.state.likes, this.props.newLike]
            })
        }

    deletePost = () => {
        let copyArr = this.state.likers.filter((liker) => liker.username !== this.props.currentUser.username)
        this.setState({
            favorite: !this.state.favorite, 
            likers: copyArr
        })

        let foundLike = this.state.likes.filter((like) => like.liker_id === this.props.currentUser.user_id)
        console.log(foundLike)
        this.props.deleteLike(foundLike)
        foundLike = []
    }

    render(){
        // console.log(this.state)

        if(this.state.image){
            image = this.state.image.attributes
            if(this.state.favorite){likeEmoji = "❤️" } else {likeEmoji = "🖤 "}

            return (
                <Card >
                        <Image src={image.img} onClick={(e) => this.props.handleClick(e, this.state.image)}/>
                    <Card.Content>
                    <Card.Header>{image.caption}</Card.Header>
                    <Card.Meta>
                        <span>{image.poster.username}</span>
                    </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon><span role="img" aria-label="Like" onClick={this.handleClick}>{likeEmoji}</span></Icon>
                        {this.state.likers.length} Likes and {this.state.commenters.length} Comments
                    </Card.Content>
                </Card>
            )} else {
            return(<div>Loading</div>)
        }
    }
}