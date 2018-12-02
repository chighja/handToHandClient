import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlaceCard from './components/PlaceCard';
import Header from './components/Header';

ReactDOM.render(
  <div>
    <Header />
    <PlaceCard />
  </div>,
  document.getElementById('root')
);
