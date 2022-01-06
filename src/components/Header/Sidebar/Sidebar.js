import React from 'react'

import HeroImage from '../Hero/HeroImage/HeroImage'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='componentStyles'>
            
            <HeroImage />
            <a className='linkStyles' href='AboutMe'>Learn More About Me</a>
        </div>
    )
}

export default Sidebar
