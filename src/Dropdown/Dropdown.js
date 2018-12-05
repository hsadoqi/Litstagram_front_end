import React, { Component } from 'react'
import './Dropdown.css'
import {Dropdown} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class DropdownMenu extends Component {

    handleClick = (e) => {
        if(e.target.innerHTML === "Add Photo"){
            this.props.history.push('/addphoto')
        }
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

export default withRouter(DropdownMenu)