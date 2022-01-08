import React from 'react';

import './../Header.css';

const Hero = () => {
    return (
        <div className='hero-styles'>
            <span className='hero-subtext-styles'>
                Hello Stranger!<br></br><br></br>
                I am Sabir!<br></br>
            </span>
            <div>
                <span className='hero-maintext-styles'>
                    The<br></br>Software Engineer
                </span>
            </div>
        </div>
    )
}

export default Hero;
