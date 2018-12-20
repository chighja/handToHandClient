import React from 'react';
import { shallow } from 'enzyme';
import Matches from './Matches';
import PlaceCard from './PlaceCard';

describe('<Matches />', () => {
  const mockChars = ['char1foo', 'char2foo'];

  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockChars) })
    );
  });

  const wrapper = shallow(<Matches />);

  wrapper.setState({ chars: mockChars });

  it('should render an array of <PlaceCard /> components', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <PlaceCard match="char1foo" key={0} />,
        <PlaceCard match="char2foo" />
      ])
    ).toBe(true);
  });
});
