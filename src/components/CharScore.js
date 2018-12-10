import React, { Component } from 'react';
import './CharScore.css';

class CharScore extends Component {
  render() {
    const {
      nameChar1,
      nameChar2,
      voteChar1,
      voteChar2
    } = this.props.updatedMatch;
    return (
      <div>
        <section className="scoreChar mainText">
          <h3 className="vtFont voteText">{voteChar1}</h3>
          <p> - {nameChar1}</p>
        </section>
        <section className="scoreChar mainText">
          <p>{nameChar2} - </p>
          <h3 className="vtFont voteText">{voteChar2}</h3>
        </section>
      </div>
    );
  }
}

export default CharScore;
