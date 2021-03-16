import React from 'react'
import './Home.scss'
import Hero from './Hero'
import ParkSection from '../../Components/Section/ParkSection'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <h1>Your Adventure Starts Here</h1>
                <p>Explore Your National Parks</p>
                <Hero />
            </div>
            <ParkSection />

        </div>


    )
}

export default Home
