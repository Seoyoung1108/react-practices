import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    /*
    return (
        <div>
            <Header />
            <Contents title="함수 컴포넌트" />
        </div>
    );
    */
   return React.createElement('div',{
    id:'App'
   }, React.createElement(Header));
}

export {App};