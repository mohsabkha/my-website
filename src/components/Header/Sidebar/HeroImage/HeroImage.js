import React from 'react'

import Image from './../../../../images/landingTitle.png';

const HeroImage = () => {
    return (
        <div className='heroImage'>
            <img className='innerHeroImage' src={Image} alt='mohammad sabir khan'></img>
        </div>
    )
}

export default HeroImage
