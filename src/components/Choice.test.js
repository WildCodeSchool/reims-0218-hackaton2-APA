import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Choice from './Choice';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Choice />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Choice />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
