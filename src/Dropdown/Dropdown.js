import React, { Component } from 'react'
import './Dropdown.css'
import {Dropdown} from 'semantic-ui-react'

export default class DropdownMenu extends Component {

    render(){
        return (
            <Dropdown>
                <Dropdown.Menu>
                    <Dropdown.Item text='Edit Profile'/>
                    <Dropdown.Item text='Account'/>
                    <Dropdown.Item text='Add Photo'/>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}