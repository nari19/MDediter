import React from 'react';
import Colors from './MemoPrint';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  mount(<MemoPrint />);
});
