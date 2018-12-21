import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should render the <Header /> component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
