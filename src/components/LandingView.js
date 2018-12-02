import React, { Component } from 'react';

class LandingView extends Component {
  render() {
    return (
      <div>
        <form id="getBtn">
          <button type="submit">Click me!</button>
          <label for="btn">Click this button</label>
        </form>
        <p class="about">
          and vote on which characters would win each match-up!
        </p>
      </div>
    );
  }
}

export default LandingView;
