import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    NPS
                </div>
                <ul>
                    <li><a href='/'>Parks</a></li>
                    <li><a href='/'>Gallery</a></li>
                    <li><a href='/'>About</a></li>
                    <li className="close">X</li>
                </ul>
            </header>

        </div>
    )
}

export default Header
