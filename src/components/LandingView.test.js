import React from 'react';
import { shallow } from 'enzyme';
import LandingView from './LandingView';

describe('<LandingView />', () => {
  const btnClick = jest.fn();
  const wrapper = shallow(<LandingView />);

  it('should fire btnClick function when clicked', () => {
    wrapper.find('form').simulate('submit');

    expect(btnClick).toHaveBeenCalled();
  });
});
