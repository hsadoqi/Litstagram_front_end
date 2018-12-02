import React, { Component } from 'react'
import './Toolbar.css'
import DropdownMenu from '../Dropdown/Dropdown'

class Toolbar extends Component {

    render(){
        return (
            <header className="toolbar">
                <nav className='toolbar_navigation'>
                    <div></div>
                    <div className="toolbar_logo"><a href='/'>Litstagram</a></div>
                    <div className='spacer-icon'/>
                    <div className="toolbar_user-icon">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="" onClick={this.handleClick}/>
                    </div>
                    <DropdownMenu/>
                    <div className='spacer'/>
                    <div className='toolbar_navigation-items'>
                        <ul>
                            <li><a href='/feed'>Feed</a></li>
                            <li><a href='/homepage'>Explore</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )}
}

export default Toolbar