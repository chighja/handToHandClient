import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/" className="title vtFont head">
          <h1>Hand-To-Hand</h1>
        </a>
        <h2 className="headText popText">A comic book character match-up!</h2>
        <p className="headText mainText">Who will be the victor?</p>
      </div>
    );
  }
}

export default Header;
