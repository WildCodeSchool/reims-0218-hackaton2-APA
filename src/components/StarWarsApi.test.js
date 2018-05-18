import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StarWarsApi from './StarWarsApi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarWarsApi />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<StarWarsApi />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
