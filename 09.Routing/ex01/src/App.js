import React, { useEffect, useState } from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";

export default function App() { 
    const [route, setRoute] = useState('/');

    const hashchangeHandler = () => {
        console.log(window.location.hash);
        setRoute(window.location.hash.substring(1));
    }

    useEffect(()=>{
        window.addEventListener('hashchange', hashchangeHandler);

        return () => {
            window.removeEventListener('hashchange', hashchangeHandler)
        }
    })

    return (
        <>
            <ul>
                <li><a href="/#/guestbook">guestbook</a></li>
                <li><a href="/#/gallery">gallery</a></li>
                <li><a href="/#/">main</a></li>
            </ul>
            {
                (() => {
                    switch(route) {
                        case '' :
                        case '/' :
                            return <Main />;
                        case '/guestbook' :
                            return <Guestbook />;
                        case '/gallery':
                            return <Gallery />;
                        default :
                            return <Error404 />;
                    }
                })()
            }
        </>
    )
}