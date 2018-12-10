import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingView.css';

class LandingView extends Component {
  render() {
    return (
      <div className="landingBox">
        <form id="getBtn">
          <Link to="/matches">
            <button
              type="submit"
              id="landBtn"
              className="btn vtFont bShadow mainText"
            >
              BATTLE-ROYALE!
            </button>
          </Link>
          <label htmlFor="btn" className="vtFont popText">
            <i className="fas fa-arrow-left" /> CLICK THIS BUTTON
          </label>
        </form>
        <p className="mainText space">
          Vote on which characters would win each match-up!
        </p>
      </div>
    );
  }
}

export default LandingView;
