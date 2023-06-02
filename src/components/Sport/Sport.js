import React from 'react';
import "../../css/Sports.css"

export const SportButton = ({image, altText, onClick}) => {
    return (
        <div style={{display: 'inline-block'}}>
            <img src={image} alt={altText} className="image" onClick={onClick}/>
            <div className="sport-content">

                <p className="text">{altText}</p>
            </div>
        </div>
    );
}
