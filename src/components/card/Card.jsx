import React, { Component }  from 'react';
import style from './cardStyle.module.css'

class Card extends Component {
    render() {
        const { id, name, description } = this.props;
        return (
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">Item ID: {id}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Item Name: {name}</h6>
              <p className="card-text">Description: {description}</p>
            </div>
          </div>
        );
    }
}

export default Card;