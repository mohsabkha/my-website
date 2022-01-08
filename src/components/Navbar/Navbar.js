import React from 'react'
import Tabs from './Tabs/Tabs';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-grid'>
            <Tabs/>
            <div className='nav-styles'></div>
        </div>
    )
}

export default Navbar
