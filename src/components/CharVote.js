import React, { Component } from 'react';

class CharVote extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <fieldset>
            <input type="radio" id="char1" name="char" value="0" />
            <label htmlFor="char1">char1</label>
            <input type="radio" id="char2" name="char" value="1" />
            <label htmlFor="char2">char2</label>
            <button>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CharVote;
