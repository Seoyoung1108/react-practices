import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function Category({category, cards}) {
    return (
        <div className='Card_List'>
            <h1>{category}</h1>
            {cards&&cards.map((card)=>{
                return <Card card={card} />
            })}
        </div>
    );
}

export default Category;