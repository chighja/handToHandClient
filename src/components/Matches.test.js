import React from 'react';
import { shallow } from 'enzyme';
import Matches from './Matches';
import PlaceCard from './PlaceCard';

describe('<Matches />', () => {
  const matches = [{ nameChar1: 'Toddy' }, { nameChar2: 'Louise' }];
  const wrapper = shallow(<Matches.WrappedComponent matches={matches} />);

  it('should render an array of <PlaceCard /> components', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <PlaceCard match={matches[0]} />,
        <PlaceCard match={matches[1]} />
      ])
    ).toEqual(true);
  });
});
