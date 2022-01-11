import React from 'react'

import Sidebar from './Sidebar/Sidebar';
import Hero from './Hero/Hero';
import './Header.css';

const Header = () => {
    return (
        <section className='header-grid header-styles' id='Home'>
            <Hero/>
            <Sidebar/>
        </section>
    )
}

export default Header
