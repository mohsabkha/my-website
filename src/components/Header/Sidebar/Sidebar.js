import React from 'react'

import HeroImage from './HeroImage/HeroImage'

const Sidebar = () => {
    return (
        <div className='sidebar-styles'>
            <HeroImage />
            <a className='sidebar-link-styles' href='#AboutMe'>Click Here!</a>
        </div>
    )
}

export default Sidebar
