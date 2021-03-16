import React from 'react'
import './Hero.scss'
import HeroCarousel from 'react-hero-carousel'
import Yosemite from '../../Images/yosemite-1.jpg'
import LMG from '../../Images/lake-mcdonald-glacier.jpg'
import zion from '../../Images/zion.jpg'
import arches from '../../Images/arches.jpg'
import gc from '../../Images/gc.jpg'
import YS from '../../Images/yellow.jpg'



const Hero = () => {



    return (
        <div className='hero-Container'>
            <HeroCarousel interval={4500}>
                <img
                    src={Yosemite}
                    width="100%"
                    height="90%"
                    alt='/'



                />
                <img
                    src={LMG}
                    width="100%"
                    height="90%"
                    alt='/'

                />
                <img
                    src={zion}
                    width="100%"
                    height="90%"
                    alt='/'

                />
                <img
                    src={arches}
                    width="100%"
                    height="90%"
                    alt='/'

                />
                <img
                    src={gc}
                    width="100%"
                    height="90%"
                    alt='/'

                />
                <img
                    src={YS}
                    width="100%"
                    height="90%"
                    alt='/'

                />
            </HeroCarousel>

        </div>
    )
}

export default Hero
