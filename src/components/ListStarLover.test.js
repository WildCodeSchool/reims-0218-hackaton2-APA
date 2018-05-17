import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListStarLover from './ListStarLover';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListStarLover />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<ListStarLover />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
