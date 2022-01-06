import React from 'react'

import Sidebar from './Sidebar/Sidebar';
import Hero from './Hero/Hero';

const Header = () => {
    return (
        <div className='header-grid'>
            <Sidebar/>
            <Hero/>
        </div>
    )
}

export default Header
