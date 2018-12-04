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
        return (
            <div className='popup'>
                <div className='popup_inner' onClick={this.props.handleClick}>
                    <div className='popup-content'>
                        <img src={this.props.post.img} alt=""/>
                        <div>
                            <p><strong>{this.props.user}</strong>: {this.props.post.caption}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}