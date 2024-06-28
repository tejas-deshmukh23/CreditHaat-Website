import React from 'react';
import './CustomerReview.css'; // Import external CSS file for styling

function CustomerReview({ messageBefore, message, name, image }) {
    return (
        <div className="customer-review">
            <div className="review-text">
                <p>{messageBefore}</p>
            </div>
            <div className="customer-image">
                <img src={image} alt="Customer" />
            </div>
            <div className="customer-name">
                <p>{name}</p>
            </div>
            <div className="review-text">
                <p>{message}</p>
            </div>
           
        </div>
    );
}

export default CustomerReview;
