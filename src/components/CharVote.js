import React, { Component } from 'react';
import './CharVote.css';

class CharVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive
    };
  }

  btnStatus = () => {
    this.setState({ isActive: true });
  };
  render() {
    const { char1, char2 } = this.props;
    const { isActive } = this.state;
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
                onClick={this.btnStatus}
              />
              <label htmlFor={char1} className="radio mainText">
                {char1}
              </label>
              <p className="vtFont">VS</p>
              <input
                type="radio"
                id={char2}
                name="char"
                value="1"
                className="charRadio radio popText"
                onClick={this.btnStatus}
              />
              <label htmlFor={char2} className="radio mainText">
                {char2}
              </label>
            </section>
            <div className={isActive ? 'visibleBtn' : 'hideBtn'}>
              <button className="btn vtFont bShadow mainText">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CharVote;
