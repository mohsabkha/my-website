import React from 'react';
import Card from './Card/Card';
import cardData from './Card/cardInfo.json'

const Cards = () => {
    return (
        <div className='card-grid'>
            <Card title={cardData.cards[0].title} text={cardData.cards[0].text} link={cardData.cards[0].link}/>
            <Card title={cardData.cards[1].title} text={cardData.cards[1].text} link={cardData.cards[1].link}/>
            <Card title={cardData.cards[2].title} text={cardData.cards[2].text} link={cardData.cards[2].link}/>
        </div>
    )
}

export default Cards
