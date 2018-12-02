import React, { Component} from 'react'
import './Homepage.css'
import {Button, ButtonToolbar} from 'react-bootstrap'

export default class Homepage extends Component {

    handleClick = (e) => {
        e.preventDefault()
        if(e.target.innerHTML === 'Sign Up'){
            console.log('sign up')
        } else {
            console.log('log in')
        }
    }

    render(){
        return (
            <div className="button">
                <ButtonToolbar>
                    <Button bsSize="large" onClick={this.handleClick}>Sign Up</Button>
                    <Button bsSize="large" onClick={this.handleClick}>Log In</Button>
                </ButtonToolbar>
            </div>
        )
    }
}