import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import Header from './Header';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the <Header /> component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
