import {App} from './App.js';
import ReactDOM from 'react-dom/client';

/*
document
    .getElementById("root")
        .appendChild(App());
        */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());