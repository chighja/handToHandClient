import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import PlaceCard from './PlaceCard';

class Matches extends Component {
  state = {
    error: undefined,
    loading: false,
    chars: []
  };

  componentDidMount() {
    this.fetchVotes();
  }

  fetchVotes = () => {
    this.setState(
      {
        error: undefined,
        loading: true
      },
      async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/votes`);
          const chars = await res.json();
          this.setState({
            loading: false,
            chars
          });
        } catch (error) {
          this.setState({
            error: error.message,
            loading: false
          });
        }
      }
    );
  };

  render() {
    const { chars } = this.state;
    return (
      <div>
        {chars.map((match, i) => (
          <PlaceCard match={match} key={i} />
        ))}
      </div>
    );
  }
}

export default Matches;
