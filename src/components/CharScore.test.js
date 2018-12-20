import React from 'react';
import { shallow } from 'enzyme';
import CharScore from './CharScore';

describe('<CharScore />', () => {
  const updatedMatch = {
    nameChar1: 'Charlie',
    nameChar2: 'Tomas',
    voteChar1: '5',
    voteChar2: '8'
  };

  it('renders without crashing', () => {
    shallow(<CharScore updatedMatch="updatedMatch" />);
  });
});
