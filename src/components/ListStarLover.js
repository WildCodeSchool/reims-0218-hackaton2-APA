import React from 'react';
import { ListGroup } from 'reactstrap';
import StarLover from './StarLover';

const props = {
    name: "MONSIEUR TARTE",
    gender: "male",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue",
    skinColor: "light",
  }


const ListStarLover = () => <ListGroup>
        <StarLover {...props}/>
        <StarLover {...props}/>
        <StarLover {...props}/>
    </ListGroup>

export default ListStarLover