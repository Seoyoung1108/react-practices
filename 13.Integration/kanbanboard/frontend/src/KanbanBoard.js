import React from 'react';
import Category from './components/Category';
import cards from './assets/json/data';
import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const categories = ["To Do", "Doing", "Done"];

    return (
        <div className="Kanban_Board">
            {categories.map((category)=>{
                return <Category category={category} cards={cards} />
            })}
        </div>
    );
}

export default KanbanBoard;