import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChoiceGender from './ChoiceGender';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChoiceGender />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  
  const props = {

     gender : ["male", "female"]
  }
  
  const tree = renderer
    .create(<ChoiceGender {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
