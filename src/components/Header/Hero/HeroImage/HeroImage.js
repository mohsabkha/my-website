import React from 'react'

import Image from './../../../../images/pic.jpg';

import './HeroImage.css';

const HeroImage = () => {
    return (
        <div className='heroImage'>
            <img className='image' style={{width: '100%'}} src={Image} alt='Sabir'></img>
        </div>
    )
}

export default HeroImage
