import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChoiceSpecie from './ChoiceSpecie';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChoiceSpecie />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  
  const props = {

     specie : ["human", "droid"]
  }
  
  const tree = renderer
    .create(<ChoiceSpecie {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
