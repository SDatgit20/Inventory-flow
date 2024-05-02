import React, { Component } from 'react';
import style from './cardStyle.module.css';

class Card extends Component {
    render() {
        const { id, name, description, imageUrl } = this.props;
        const imagePath = imageUrl ? imageUrl : null;
        console.log('image path',imagePath);
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Item ID: {id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Item Name: {name}</h6>
                    <p className="card-text">Description: {description}</p>
                    {imagePath && <img src={imagePath} className="card-img-top" alt="Item Image" />}
                </div>
            </div>
        );
    }
}

export default Card;
