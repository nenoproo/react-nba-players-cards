import React from 'react';

const Card = ({ name, jerseyNumber, position, age, country, image }) => {
    
    return (
        <div className="card">
            <img src={image} alt="{name}" className="profile-img" />
            <div className="user-info">
                <h2>{name}</h2>
                <p><b>Jersey Number</b>: {jerseyNumber}</p>
                <p><b>Position</b>: {position}</p>
                <p><b>Age</b>: {age}</p>
                <p><b>Country</b>: {country}</p>
            </div>
        </div>
    );
}

export default Card;