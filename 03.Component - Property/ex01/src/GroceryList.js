import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList(props) {
    return (
        <ol className="grocery-list">
            <GroceryItem name={'bread'} count={10}></GroceryItem>
            <GroceryItem name={'milk'} count={20}></GroceryItem>
            <GroceryItem name={'egg'} count={5}></GroceryItem>
        </ol>
    );
}

export default GroceryList;