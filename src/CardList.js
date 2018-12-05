import React from 'react';
import {Card} from './Card';

export function CardList(props){
    return(
        <div>
            {props.cards.map(card => <Card key={card.name} {...card} />)}
        </div>
    )
};