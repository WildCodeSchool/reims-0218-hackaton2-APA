import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListStarLover from './ListStarLover';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListStarLover data={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  
  const props = {

     data : [
      {
     name: "MONSIEUR TARTE",
     gender: "male",
     species: "human",
     hairColor: "blond",
     eyeColor: "blue",
     skinColor: "light",
   },
   {
     name: "MONSIEUR FISCHER",
     gender: "male",
     species: "human",
     hairColor: "blond",
     eyeColor: "blue",
     skinColor: "light",
   },
   {
     name: "MONSIEUR DESCHAMPS",
     gender: "male",
     species: "human",
     hairColor: "blond",
     eyeColor: "blue",
     skinColor: "light",
   },
   {
     name: "MONSIEUR LUKE",
     gender: "male",
     species: "human",
     hairColor: "blond",
     eyeColor: "blue",
     skinColor: "light",
   }
 
  ]
  }
  
  const tree = renderer
    .create(<ListStarLover {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
