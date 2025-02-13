import React, { useEffect, useState } from 'react';
import Card from './Card';

function Category({category, cards}) {
    const [targetCards, setTargetCards]=useState(null);

    useEffect(()=>{
        let tempCards = [];

        for(let i=0; i<cards.length; i++){
            console.log(cards[i]);
            if(cards[i].status===category.replace(" ","")){
                tempCards.push(cards[i]);
            }
        }

        setTargetCards(tempCards);
    },[])

    return (
        <div className='Card_List'>
            <h1>{category}</h1>
            {targetCards&&targetCards.map((card)=>{
                return <Card card={card} />
            })}
        </div>
    );
}

export default Category;