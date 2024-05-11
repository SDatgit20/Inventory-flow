import React, { Component } from 'react';
import ItemService from '../../service/ItemService';
import Card from '../card/Card';
import './searchRecipe.css';

class SearchItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      items: [],
    };

    // Binding the event handlers
    this.changeSearchNameHandler = this.changeSearchNameHandler.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  // Handle changes in the Search Name input field
  changeSearchNameHandler(event) {
    const { value } = event.target;
    this.setState({ searchName: value });
    // Fetch items related to the input
    ItemService.getItemByName(value)
      .then((res) => {
        const items = res.data;
        this.setState({ items });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Handle search item button click
  searchItem(event) {
    event.preventDefault();
  }

  render() {
    const { items } = this.state;

    return (
      <div className="search-container">
        <h3 className="text-center search-head"></h3>
        <form className="search-form" onSubmit={this.searchItem}>
          <input
            type="text"
            placeholder="Search Name"
            name="searchName"
            className="search-input"
            value={this.state.searchName}
            onChange={this.changeSearchNameHandler}
            list="itemNames" // Connect input with datalist
          />
          <datalist id="itemNames">
            {items.map(item => (
              <option key={item.id} value={item.name} />
            ))}
          </datalist>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {/* Display search results */}
        <div className="search-results">
          {items.map(item => (
            <div key={item.id} className="search-item">
              <Card
                id={item.id}
                name={item.name}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchItemComponent;
