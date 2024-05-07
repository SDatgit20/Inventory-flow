import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from '../service/ItemService';
import Card from '../components/card/Card';
import './recipeItem.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    ItemService.getItems().then((res) => {
      this.setState({ items: res.data });
    });
  }

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          {this.state.items.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <Link to={`/item-details/${item.name}`} className="custom-link">
                <Card
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Item;
