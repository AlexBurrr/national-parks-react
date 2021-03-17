import React from 'react'
import './Section.scss'
import HRB from '../../Images/horsebackRiding.jpg'
import biking from '../../Images/biking.jpg'
import climbing from '../../Images/climbing.jpg'
import camping from '../../Images/camping.jpg'

const ParkSection = () => {
    return (
        <div className="sectionContainer">
            <h1 className='rec'>Recreational Opportunities</h1>
            <div class="grid-container">
                <div class='camping'>
                    <img src={camping} alt="/" />
                    <span className='camping-span'>Camping</span>

                </div>
                <div class="biking">
                    <img src={biking} alt="/" />
                    <span className='bike-span'>Biking</span>

                </div>
                <div class="picture">
                    <img src={HRB} alt="/" />
                    <span className='hrb'>Horse Back Riding</span>

                </div>
                <div class="climbing">
                    <img src={climbing} alt="/" />
                    <span className='climbing-span'>Climbing</span>

                </div>
            </div>
        </div>
    )
}

export default ParkSection
