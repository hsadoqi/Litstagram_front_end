import React, { Component} from 'react'
import './LandingPage.css'
import {Button, ButtonToolbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class LandingPage extends Component {

    render(){
        return (
            <div className="button">
                <ButtonToolbar>
                    <Link to="/signup"><Button bsSize="large" onClick={this.handleClick}>Sign Up</Button></Link>
                    <Link to="/login"><Button bsSize="large" onClick={this.handleClick}>Log In</Button></Link>
                </ButtonToolbar>
            </div>
        )
    }
}