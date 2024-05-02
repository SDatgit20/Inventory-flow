import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='header'>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <div>
                            <Link to="/" className="header-item">Home</Link>
                            <Link to="/add-items" className="header-item">Add</Link>
                            <Link to="/search-item" className="header-item">Search</Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;