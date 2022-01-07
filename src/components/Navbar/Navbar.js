import React from 'react'
import Tabs from './Tabs/Tabs';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav-grid'>
            <Tabs/>
            <div className='navStyles'></div>
        </nav>
    )
}

export default Navbar
