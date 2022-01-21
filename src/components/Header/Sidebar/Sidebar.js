import React from 'react'
import useSound from 'use-sound';

import Beep from './../../../sounds/ui_sound.mp3';
import HeroImage from './HeroImage/HeroImage';

const Sidebar = () => {
    const [isClicked] = useSound(Beep, {volume:.25})
    return (
        <div className='sidebar-styles'>
            <HeroImage />
            <a className='sidebar-link-styles' onClick={isClicked} href='#AboutMe'>Click Here!</a>
        </div>
    )
}

export default Sidebar
