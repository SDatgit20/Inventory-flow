import React, { Component } from 'react';
import ItemService from '../../service/ItemService';
import './searchItem.css';
import Card from '../card/Card';

class SearchItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      items: null,
    };

    // Binding the event handlers
    this.changeSearchNameHandler = this.changeSearchNameHandler.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  // Handle changes in the Search Name input field
  changeSearchNameHandler(event) {
    this.setState({ searchName: event.target.value });
  }

  // Handle search item button click
  searchItem(event) {
    event.preventDefault();
    ItemService.getItemByName(this.state.searchName)
      .then((res) => {
        const items = res.data;
        this.setState({ items });
      })
      .catch((error) => {
        console.log(error); // Handle any errors that occur during the API call
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="search-container">
        <h3 className="text-center search-head">Search Item</h3>
        <form className="search-form" onSubmit={this.searchItem}>
          <input
            type="text"
            placeholder="Search Name"
            name="searchName"
            className="search-input"
            value={this.state.searchName}
            onChange={this.changeSearchNameHandler}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {items && (
          <div className="search-results">
            {items.map(item => (
              <div key={item.id} className="search-item">
              <Card
              id={item.id}
              name={item.name}
              description={item.description}
              imageUrl= {item.imageUrl}
              />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchItemComponent;
