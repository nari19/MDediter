import React from 'react';
import ReactDOM from 'react-dom';
import MDediter from './MDediter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MDediter />, div);
  ReactDOM.unmountComponentAtNode(div);
});