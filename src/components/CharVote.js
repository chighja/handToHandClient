import React, { Component } from 'react';
import './CharVote.css';

class CharVote extends Component {
  render() {
    const { char1, char2 } = this.props;
    return (
      <div className="voteBox">
        <form onSubmit={this.props.onSubmit} className="charForm">
          <fieldset>
            <section className="radioBox">
              <input
                type="radio"
                id={char1}
                name="char"
                value="0"
                className="charRadio radio popText"
              />
              <label htmlFor={char1} className="radio mainText">
                {char1}
              </label>
              <input
                type="radio"
                id={char2}
                name="char"
                value="1"
                className="charRadio radio popText"
              />
              <label htmlFor={char2} className="radio mainText">
                {char2}
              </label>
            </section>
            <button className="btn vtFont bShadow mainText">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CharVote;
