import React, {useState, useRef} from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    const refDiv = useRef(null); //current:null
    const [test, setTest] = useState('hello');

    
    return (
        /*<div>
            <Header />
            <Contents title="함수 컴포넌트" />
        </div>*/
        <div id="App" ref={refDiv}>
            {'Test01'}
        </div>
    );

    /*
   return React.createElement('div',{
    id:'App'
   }, React.createElement(Header));*/
}

export {App};