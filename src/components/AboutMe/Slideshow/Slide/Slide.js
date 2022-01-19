import React from 'react';
import personalImage from './../../../../images/pic.jpg';
import {HiAcademicCap, HiLightBulb, HiLibrary, HiBriefcase, HiFire} from 'react-icons/hi';

const Slide = (props) => {

    let myImage = null;
    if(props.slideId % 2 === 0){
        switch(props.slideId){
            case 0:{
                myImage = <img  className='slide-image'src={personalImage} alt='mohammad sabir khan'></img>
                break;
            }
            case 2:{
                myImage = <div className='slide-image-container'><HiLibrary className='slide-image'/></div>
                break;
            }
            case 4:{
                myImage = <div className='slide-image-container'><HiBriefcase className='slide-image'/></div>
                break;
            }
            default:{
                myImage = <div className='slide-image-container'><HiFire className='slide-image'/></div>
                break;
            }
        }
        return (
            <div className='slide-grid'>
                <div>
                    {myImage}
                </div>
                <div className='slide-info'>
                    <div className='slide-info-textbox'>
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
    else{
        switch(props.slideId){
            case 1:{
                myImage = <div className='slide-image-container'><HiLightBulb className='slide-image'/></div>
                break;
            }
            case 3:{
                myImage = <div className='slide-image-container'><HiAcademicCap className='slide-image'/></div>
                break;
            }
            case 5:{
                myImage = <a href='#Projects' className='slide-button'>{props.pic}</a>
                break;
            }
            default:{
                myImage = <div className='slide-image-container'><HiFire className='slide-image'/></div>
                break;
            }
        }
        return (
            <div className='slide-grid'>
                <div className='slide-info'>
                    <div className='slide-info-textbox'>
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className='slide-image-box'>
                    {myImage}
                </div>
            </div>
        )
    }
}

export default Slide
