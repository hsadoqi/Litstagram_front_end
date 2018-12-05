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
    //    console.log()
    }

    render(){
        console.log(this.props.post)
        // console.log(this.props.post.comments)
        let arrayOfComments = this.props.post.comments.map((comment) => <li key={comment.id}><a href={"/users/" + comment["commenter-id"] + "/profile"}><strong>{comment["commenter-name"]}</strong></a> : {comment.content} </li>)
        let arrayOfLikers = this.props.post.likers.map((liker) => liker.username).join(", ")

        return (
            <div className='popup' onClick={this.props.handleClick}>
                <div className='popup_inner'>
                    <div className='popup-content'>
                        <div>
                            <p><strong>{this.props.user}</strong></p>
                        </div>
                        <img src={this.props.post.img} alt=""/>
                        <div>
                        <p style={{ textAlign: "center"}}>{this.props.post.caption}</p>
                        {arrayOfLikers ? 
                        <p><span role="img" aria-label="">❤️</span> <strong> {arrayOfLikers}</strong> liked this</p>
                        : <p><span role="img" aria-label="">❤️</span></p> }
                            <ul style={{listStyleType: 'none'}}>
                                {arrayOfComments}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}