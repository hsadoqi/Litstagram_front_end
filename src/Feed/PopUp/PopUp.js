import React, { Component } from 'react'
import './PopUp.css'
// import ImageCard from '../ImageCard/ImageCard'
import CommentForm from './CommentForm/CommentForm'

let newComment
export default class PopUp extends Component {

    render(){
        let arrayOfComments = this.props.post.comments.map((comment) => <li key={comment.id}><a href={"/users/" + comment["commenter-id"] + "/profile"}><strong>{comment["commenter-name"]}</strong></a> : {comment.content} </li>)
        let arrayOfLikers = this.props.post.likers.map((liker) => liker.username).join(", ")

        if(this.props.newComment !== ''){
            newComment = <li key={this.props.newComment.id}><a href={"/users/" + this.props.currentUser.user_id + "/profile"}><strong>{this.props.currentUser.username}</strong></a> : {this.props.newComment.content} </li>
        }
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='popup-content'>
                        <div>
                            <p><strong>{this.props.user}</strong></p>
                        </div>
                        <img src={this.props.post.img} alt="" onClick={this.props.handleClick}/>
                        <div>
                        <p style={{ textAlign: "center"}}>{this.props.post.caption}</p>
                        {arrayOfLikers ?
                        <p><span role="img" aria-label="">❤️</span> <strong>{arrayOfLikers}</strong> liked this</p>
                        : <p><span role="img" aria-label="">❤️</span></p> }
                            <ul style={{listStyleType: 'none'}}>
                                {arrayOfComments}
                                {newComment ? newComment : null}
                                <li><CommentForm addCommentToPhoto={this.props.addCommentToPhoto}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}