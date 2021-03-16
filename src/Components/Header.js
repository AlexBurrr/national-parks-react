import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    NPS
                </div>
                <ul>
                    <li><Link style={{ color: '#fff', textDecoration: 'none', }} to='/Home'>Home</Link></li>
                    <li><Link style={{ color: '#fff', textDecoration: 'none' }} to='/Parks'>Parks</Link></li>
                    <li><Link style={{ color: '#fff', textDecoration: 'none' }} to='/Donate'>Donate</Link></li>
                    <li><Link style={{ color: '#fff', textDecoration: 'none' }} to='/About'>About</Link></li>
                    <li className="close">X</li>
                </ul>
                <div className="menu">
                    Menu
                </div>
            </header>


        </div >
    )
}

export default Header
