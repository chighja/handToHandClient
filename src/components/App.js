import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingView from './LandingView';
import Matches from './Matches';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={LandingView} />
          <Route exact path="/matches" component={Matches} />
        </div>
      </Router>
    );
  }
}

export default App;
