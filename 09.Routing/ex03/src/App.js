import React from 'react';

import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from '../../ex01/src/component/Error404';
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';

export default function App() {
    return (
        /*
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/gallery'} element={<Gallery />} />
                <Route path={'/guestbook'} element={<Guestbook />} />
                <Route path={'*'} element={<Error404 />} />
            </Routes>
        </HashRouter>
        */

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/guestbook' element={<Guestbook />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}