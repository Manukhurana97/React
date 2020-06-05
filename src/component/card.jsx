import React from "react";
import ReactDOM from 'react-dom'

export default function Card(prop){
    return (
        <div className="card">
            <span className="card" style={{width: '18rem'}} > </span>
            <img className="card-img-top" src={prop.imagesrc} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
            </div>
        </div>
    );
}
