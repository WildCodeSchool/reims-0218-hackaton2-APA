import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StarLover from './Article';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarLover />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders correctly', () => {
  const tree = renderer
    .create(<StarLover />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});