import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import PlaceCard from './PlaceCard';

class Matches extends Component {
  state = {
    error: undefined,
    loading: false
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
          const matches = await res.json();
          // this.setState({
          //   loading: false,
          //   chars
          // });

          this.props.dispatch({
            type: 'FETCH_MATCHES_SUCCESS',
            payload: { matches }
          });
        } catch (error) {
          // this.setState({
          //   error: error.message,
          //   loading: false
          // });

          this.props.dispatch({
            type: 'FETCH_MATCHES_ERROR',
            payload: { error: error.message }
          });
        }
      }
    );
  };

  render() {
    const { matches } = this.props;

    return (
      <div>
        {matches.map((match, i) => (
          <PlaceCard match={match} key={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ matches: state.matches });

export default connect(mapStateToProps)(Matches);
