import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function getdata() {}

class LandingView extends Component {
  render() {
    return (
      <div>
        <form id="getBtn">
          <Link to="/matches">
            <button type="submit">Click me!</button>
          </Link>
          <label htmlFor="btn">Click this button</label>
        </form>
        <p className="about">
          and vote on which characters would win each match-up!
        </p>
      </div>
    );
  }
}

export default LandingView;
