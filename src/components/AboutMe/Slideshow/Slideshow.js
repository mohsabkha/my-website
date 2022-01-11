import React, {useState} from 'react';
import SlideData from './Slide/SlideData.json';
import Slide from './Slide/Slide';

import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi'

const Slideshow = () => {

    const [slide, setSlide] = useState(0)
    const {slides} = SlideData;

    const hanldeNext = () => {
        let slideIndex = slide + 1;
        if(slideIndex === slides.length){
            slideIndex = 0;
        }
        setSlide(slideIndex);
    }
    const handlePrev = () => {
        let slideIndex = slide - 1;
        if(slideIndex < 0){
            slideIndex = slides.length - 1;
        }
        setSlide(slideIndex);
    }
    return (
        <div className='slideshow-grid slideshow'>
            {/* {slides.map((el) => {
                return <Slide title={slidee.title} text={el.text}/>
            })} */}
            <div className='slideshow-button-styles'>
                <button className='slideshow-button-left' onClick={handlePrev}><HiArrowNarrowLeft/></button>
            </div>
            
            <Slide title={slides[slide].title} text={slides[slide].text} slideId={slides[slide].id} pic={slides[slide].pic}/>
            <div className='slideshow-button-styles'>
                <button className='slideshow-button-right' onClick={hanldeNext}><HiArrowNarrowRight/></button>
            </div>
        </div>
    )
}

export default Slideshow;
