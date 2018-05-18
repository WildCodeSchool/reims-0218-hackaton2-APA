import React from 'react'
import { ListGroupItem } from 'reactstrap'

const StarLover = ({ id, name, gender, species, eyeColor }) => <ListGroupItem>
    <p>{ id }</p>
    <p>{ name }</p>
    <p>{ gender }</p>
    <p>{ species }</p>
    <p>{ eyeColor }</p>
</ListGroupItem>

export default StarLover
