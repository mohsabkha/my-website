import React from 'react'
import Slideshow from './Slideshow/Slideshow';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className='section-grid aboutMe' id='AboutMe'>
            <h2 className='section-title'>About Me</h2>
            <Slideshow/>
        </section>
    )
}

export default AboutMe
