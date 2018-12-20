import React from 'react';
import { shallow } from 'enzyme';
import CharVote from './CharVote';

describe('<CharVote />', () => {
  const btnClick = jest.fn();
  const wrapper = shallow(<CharVote onSubmit={btnClick} />);

  it('should fire btnClick function when clicked', () => {
    wrapper.find('form').simulate('submit');

    expect(btnClick).toHaveBeenCalled();
  });
});
