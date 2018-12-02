import React from 'react'
import './Toolbar.css'

const Toolbar = props => (
    <header className="toolbar">
        <nav className='toolbar_navigation'>
            <div></div>
            <div className="toolbar_logo"><a href='/'>Litstagram</a></div>
            <div className='spacer'/>
            <div className='toolbar_navigation-items'>
                <ul>
                    <li><a href='/feed'>Feed</a></li>
                    <li><a href='/homepage'>Explore</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar