import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'

const name = 'manu';
const currDate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString()

export default function App() {
    return (
        <React.Fragment>
            <Header/>
            <h1> {name} </h1>
            <p> world</p>
            <p>Current date {currDate}</p>
            <h1>{currtime}</h1>
        </React.Fragment>
    );
}
