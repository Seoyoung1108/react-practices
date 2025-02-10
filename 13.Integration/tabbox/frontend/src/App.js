import React from 'react';
//import './assets/scss/App.scss';
import './assets/css/styles.css';
import data from './assets/json/data';
import TabBox from './TabBox';

function App(props) {

    return (
        <div id={'App'}>
             <TabBox data={data} />
        </div>
    );
}

export default App;