import React, { Component } from 'react';
import CharVote from './CharVote';
import CharScore from './CharScore';
import { API_BASE_URL } from '../config';
import './PlaceCard.css';

class PlaceCard extends Component {
  state = {
    hasVoted: false,
    isActive: false
  };

  vote = e => {
    e.preventDefault();
    const { _id, nameChar1, voteChar1, voteChar2 } = this.props.match;
    let char1 = document.getElementById(nameChar1);
    const updateObj = char1.checked
      ? { voteChar1: voteChar1 + 1 }
      : { voteChar2: voteChar2 + 1 };
    this.setState(
      {
        error: undefined,
        loading: true
      },
      async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/votes/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateObj)
          });
          const { vote } = await res.json();
          this.setState({
            hasVoted: true,
            updatedMatch: vote
          });
        } catch (error) {
          this.setState({
            error: error.message
          });
        }
      }
    );
  };

  render() {
    const { image1, image2, nameChar1, nameChar2 } = this.props.match;
    const isActive = this.state.isActive;

    return (
      <div>
        <section className="box">
          <div className="imgContainer">
            <label for={nameChar1}>
              <img src={image1} alt={nameChar1} className="images" />
            </label>
          </div>
          <div className="imgContainer">
            <label for={nameChar2}>
              <img src={image2} alt={nameChar2} className="images" />
            </label>
          </div>
        </section>
        {!this.state.hasVoted ? (
          <CharVote
            onSubmit={this.vote}
            char1={nameChar1}
            char2={nameChar2}
            isActive={isActive}
          />
        ) : (
          <CharScore updatedMatch={this.state.updatedMatch} />
        )}
      </div>
    );
  }
}

export default PlaceCard;
