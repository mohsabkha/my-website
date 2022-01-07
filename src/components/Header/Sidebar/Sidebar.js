import React from 'react'

import HeroImage from './HeroImage/HeroImage'

const Sidebar = () => {
    return (
        <div className='componentStyles'>
            <HeroImage />
            <a className='linkStyles header-button' href='#AboutMe'>Learn More About Me</a>
        </div>
    )
}

export default Sidebar
