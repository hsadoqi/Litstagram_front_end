import React, { Component } from 'react'
import './PopUp.css'
// import ImageCard from '../ImageCard/ImageCard'

export default class PopUp extends Component {
    state = {
        likes: [],  
        comments: []
    }

    componentDidMount(){
       console.log(this.props.post)
    }

    render(){
        // console.log(this.props.post)
        console.log(this.props.post.comments)
        let arrayOfComments = this.props.post.comments.map((comment) => <li><strong>{comment["commenter-name"]}</strong>: {comment.content}</li>)

        return (
            <div className='popup' onClick={this.props.handleClick}>
                <div className='popup_inner'>
                    <div className='popup-content'>
                        <img src={this.props.post.img} alt=""/>
                        <div>
                            <ul style={{listStyleType: 'none'}}>
                                <li><strong>{this.props.user}</strong>: {this.props.post.caption}</li>
                                {arrayOfComments}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}