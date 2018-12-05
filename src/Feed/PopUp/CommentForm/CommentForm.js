import React, { Component} from 'react'
import './CommentForm.css'

export default class CommentForm extends Component {
    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e, comment) => {
        e.preventDefault()
        this.props.addCommentToPhoto(comment)
        this.setState({
            comment: ''
        })
    }

    render(){
    
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, this.state.comment)}>
                    <input name="comment" value={this.state.value} onChange={this.handleChange}/>
                    <button >Comment</button>
                </form>
            </div>
        )
    }
}