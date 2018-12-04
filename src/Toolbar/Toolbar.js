import React, { Component } from 'react'
import './Toolbar.css'
import DropdownMenu from '../Dropdown/Dropdown'


class Toolbar extends Component {
    state = {
        id: null
    }

    componentDidMount(){    
        let token = localStorage.getItem('token')
        if(token){
            this.setState({
                id: Number(token)
            })
        }
    }

    signOut = () => {
        localStorage.removeItem('token')
    }
    
    render(){
        return (
            <header className="toolbar">
                <nav className='toolbar_navigation'>
                    <div></div>
                    <div className="toolbar_logo"><a href={this.state.id ? '/explore' : '/'}>Litstagram</a></div>
                    <div className='spacer-icon'/>
                    {this.state.id ? 
                    <div className="toolbar_user-icon">
                        <a href={'/users/'+ this.state.id +'/profile'}><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt=""/></a>
                    <DropdownMenu/>
                    </div> : null }
                    <div className='spacer'/>
                    <div className='toolbar_navigation-items'>
                        <ul>
                            {this.state.id ? <li onClick={this.signOut}><a href='/'>Sign Out</a></li> : null}
                        </ul>
                    </div>
                </nav>
            </header>
        )}
}

export default Toolbar