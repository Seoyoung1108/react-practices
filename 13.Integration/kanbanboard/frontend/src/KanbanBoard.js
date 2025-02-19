import React, { useState, useEffect } from 'react';
import Category from './components/Category';
//import cards from './assets/json/data';
import './assets/scss/KanbanBoard.scss';
import axios from 'axios';

function KanbanBoard() {
    const categories = ["To Do", "Doing", "Done"];
    
    const [cards, setCards] = useState(null);
    
    const getCards = async () => {
        try{
            const response = await axios.get('/kanbanboard/card');
            const jsonResult = response.data;
            
            setCards(jsonResult.data);

        } catch(error) {
            console.error(e);
        }
    }

    useEffect(()=>{
        getCards();
    },[])

    return (
        <div className="Kanban_Board">
            {categories.map((category)=>{
                return <Category category={category} cards={cards&&cards.filter((card)=>{
                    return card.status === category.replace(" ","");
                })}/>
            })}
        </div>
    );
}

export default KanbanBoard;