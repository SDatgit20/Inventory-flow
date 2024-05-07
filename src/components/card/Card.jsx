import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { id, name, description, imageUrl } = this.props;
        const imagePath = imageUrl ? imageUrl : null;
        console.log('image path',imagePath);
        return (
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title mb-2 text-muted">Item Name: {name}</h6>
                    <p className="card-text">Description: {description}</p>
                    {imagePath && <img src={imagePath} className="card-img-top" alt="Item Image" />}
                </div>
            </div>
        );
    }
}

export default Card;
