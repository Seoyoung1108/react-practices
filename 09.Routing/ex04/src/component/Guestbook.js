import React, { useEffect } from 'react';
import {useNavigate, NavLink} from 'react-router-dom';

export default function Guestbook() {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/error/500');
        }, 3000)
    })

    return (
        <>
            <ul>
                <li><NavLink className={'ff'} to={'/'}>[Main]</NavLink></li>
                <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
            </ul>
            <div>
                <h1>Guestbook</h1>
            </div>
        </>
    );
}