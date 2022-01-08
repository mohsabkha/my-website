import React from 'react'

import Sidebar from './Sidebar/Sidebar';
import Hero from './Hero/Hero';
import './Header.css';

const Header = () => {
    return (
        <div className='header-grid header-styles'>
            <Hero/>
            <Sidebar/>
        </div>
    )
}

export default Header
