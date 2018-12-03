import React, { Component } from 'react';
import CharVote from './CharVote';
import CharScore from './CharScore';

class PlaceCard extends Component {
  state = { hasVoted: false };

  vote = e => {
    e.preventDefault();
    let char1 = e.target.querySelector('#char1');
    const votedFor = char1.checked ? 'char1' : 'char2';
    console.log(votedFor);
    this.setState({ hasVoted: true });
  };

  render() {
    return (
      <div>
        <section className="imageBox">
          <img src="./images/batman.jpg" alt="batman" width="200" />
          <img src="./images/bobafett.jpg" alt="Boba Fett" width="200" />
        </section>
        {!this.state.hasVoted ? (
          <CharVote onSubmit={this.vote} />
        ) : (
          <CharScore />
        )}
      </div>
    );
  }
}

export default PlaceCard;
