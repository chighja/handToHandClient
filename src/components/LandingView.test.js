import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import LandingView from './LandingView';
describe('<LandingView />', () => {
  const getDefault = () => shallow(<LandingView />);

  it('should include link to <Matches /> endpoint', () => {
    const wrapper = getDefault();
    expect(wrapper.find(Link).props().to).toBe('/matches');
  });
});
