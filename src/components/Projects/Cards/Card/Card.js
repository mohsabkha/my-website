import React from 'react';


const Card = (props) => {
    return (
        <div className='card'>
            <h4 className='card-title'>
                {props.title}
            </h4>
            <div className='card-image'>

            </div>
            <p className='card-text'>
                {props.text}
            </p>
            <a href={props.link} className='card-link'>
                click here to learn more!
            </a>
        </div>
    )
}

export default Card
