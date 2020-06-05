import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import Card from "./component/card";


ReactDOM.render(
    <React.Fragment>
        <App/>
        <Card
            imagesrc='https://wallpapercave.com/wp/wp2144590.jpg'
            title='alpha romea'
        />
        <Card
            imagesrc='https://wallpapercave.com/wp/wp1861758.jpg'
            title='R8'
        />

    </React.Fragment>,
    document.getElementById('root')
);

