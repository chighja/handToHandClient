import React from 'react';
import { shallow } from 'enzyme';
import PlaceCard from './PlaceCard';
import CharVote from './CharVote';
import CharScore from './CharScore';

describe('<PlaceCard />', () => {
  const match = {
    image1: 'image1address',
    image2: 'image2address',
    nameChar1: 'Charlie',
    nameChar2: 'Tomas'
  };
  const getDefault = () => shallow(<PlaceCard match={match} />);

  describe('if hasVoted is false', () => {
    const wrapper = getDefault();

    it('should render <CharVote /> component', () => {
      expect(wrapper.containsMatchingElement(<CharVote />)).toEqual(true);
    });
  });

  describe('if hasVoted is true', () => {
    const wrapper = getDefault();
    wrapper.setState({ hasVoted: true });

    it('should render <CharScore /> component', () => {
      expect(wrapper.containsMatchingElement(<CharScore />)).toEqual(true);
    });
  });
});
