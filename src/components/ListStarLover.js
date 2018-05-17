import React from 'react';
import { ListGroup } from 'reactstrap';
import StarLover from './StarLover';


const ListStarLover = ({ data }) => <ListGroup>
       { data.map ((starlover, id) => <StarLover key={id} {...starlover} />)}
    </ListGroup>

export default ListStarLover