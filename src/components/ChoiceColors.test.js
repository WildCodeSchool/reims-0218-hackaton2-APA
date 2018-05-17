import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {ChoiceEye, ChoiceSkin} from "./ChoiceColors";

it('renders Eye without crashing', () => {
  const divEye = document.createElement('div');
  ReactDOM.render(<ChoiceEye />, divEye);
  ReactDOM.unmountComponentAtNode(divEye);
});

it('renders Skin without crashing', () => {
  const divSkin = document.createElement('div');
  ReactDOM.render(<ChoiceSkin />, divSkin);
  ReactDOM.unmountComponentAtNode(divSkin);
});

it('renders Eye correctly', () => {
  
  const props = {

     colors : ["Blue", "Red", "Green","Black","Yellow"]
  }
  
  const treeEye = renderer
    .create(<ChoiceEye {...props} />)
    .toJSON();
  expect(treeEye).toMatchSnapshot();
});

it('renders Skin correctly', () => {
  
  const props = {

     colors : ["Blue", "Red", "Green","Black","Yellow"]
  }
  
  const treeSkin = renderer
    .create(<ChoiceSkin {...props} />)
    .toJSON();
  expect(treeSkin).toMatchSnapshot();
});

