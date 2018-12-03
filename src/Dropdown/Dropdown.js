import React, { Component } from 'react'
import './Dropdown.css'
import {Dropdown} from 'semantic-ui-react'

export default class DropdownMenu extends Component {

    handleClick = (e) => {
        console.log(e.target.innerHTML)
    }

    render(){
        return (
            <Dropdown>
                <Dropdown.Menu>
                    <Dropdown.Item text='Edit Profile' onClick={this.handleClick}/>
                    <Dropdown.Item text='Account' onClick={this.handleClick}/>
                    <Dropdown.Item text='Add Photo'onClick={this.handleClick}/>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}