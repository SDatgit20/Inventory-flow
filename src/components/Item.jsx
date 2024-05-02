import React, { Component } from 'react';
import ItemService from '../service/ItemService';
import Card from './card/Card';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    // binding add item emthod
    this.addItem = this.addItem.bind(this);

    // binding update item method
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount(){
    ItemService.getItems().then((res) => {
      this.setState({items : res.data})
    });
  }
  
  addItem(){
    this.props.history.push('/add-items')
  }

  // update item button method
  updateItem(id){
    this.props.history.push(`/update-items/${id}`);
  }

  // search item by id method
  searchItemById(id){

    console.log(`Searching item with ID: ${id}`);
  }

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          {this.state.items.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <Card
                id={item.id}
                name={item.name}
                description={item.description}
                imageUrl= {item.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Item;