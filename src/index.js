import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'
import App from "./app";

const name = 'manu';
const currDate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString()

ReactDOM.render(
    <React.Fragment>
        <App></App>
    </React.Fragment>,
    document.getElementById('root')
);

