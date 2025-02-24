import React from 'react';
import {Link,NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <>
            <ul>
                <li><NavLink className={'ff'} to={'/'}>[Main]</NavLink></li>
                <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
            </ul>
            <div>
                <h1>Main</h1>
            </div>
        </>
    );
}