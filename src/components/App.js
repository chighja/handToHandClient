import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import LandingView from './LandingView';
import Matches from './Matches';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <Route exact path="/" component={LandingView} />
            <Route exact path="/matches" component={Matches} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
