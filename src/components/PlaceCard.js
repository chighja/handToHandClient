import React, { Component } from 'react';

class PlaceCard extends Component {
  render() {
    return (
      <div>
        <form action="">
          <fieldset>
            <input type="radio" id="char1" name="char" value="1" />
            <label for="char1">char1</label>
            <input type="radio" id="char2" name="char" value="2" />
            <label for="char2">char2</label>
            <button>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default PlaceCard;
