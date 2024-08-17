import React from 'react';
import './image-card.css';

const ImageCard = ({ image, title, price }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ImageCard;
