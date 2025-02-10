import React from 'react';

function GroceryItem(props) {
    return (
        <li>
        <strong>{props.name}</strong>
        <span>{props.count}</span>
    </li>
    );
}

export default GroceryItem;