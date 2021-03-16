import React from 'react'
import Parks from './Parks/Parks'
import Home from './Home/Home'
import Donate from './Donate/Donate'
import About from './About/About'
import { Route } from 'react-router-dom'
import './Pages.scss'

const Pages = () => {
    return (
        <div className='page'>
            <Route path='/Home' component={Home} exact className='home' />
            <Route path='/Parks' component={Parks} />
            <Route path='/Donate' component={Donate} />
            <Route path='/About' component={About} />


        </div>
    )
}

export default Pages
