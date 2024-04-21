import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div class="footer-data">
                    <span className="text-muted">
                        Made by Srashti Deshmukh 
                    </span>
                    <br/>
                    </div>
                    <a href="https://github.com/SDatgit20"><img src="./github1.png" class="icon-style" alt="Github icon"/></a>
                </footer>
            </div>
        );
    }
}

export default Footer;