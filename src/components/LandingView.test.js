import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import LandingView from './LandingView';
import Matches from './Matches';

describe('<LandingView />', () => {
  const getDefault = () => shallow(<LandingView />);

  it('should include link to <Matches /> endpoint', () => {
    const wrapper = getDefault();
    expect(wrapper.find(Link).props().to).toBe('/matches');
  });
});
