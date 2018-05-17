import React from 'react'
import { ListGroupItem } from 'reactstrap'

const StarLover = ({ id, name, gender, species, hairColor, eyeColor, skinColor }) => <ListGroupItem>
    <p>{ id }</p>
    <p>{ name }</p>
    <p>{ gender }</p>
    <p>{ species }</p>
    <p>{ hairColor }</p>
    <p>{ eyeColor }</p>
    <p>{ skinColor }</p>
</ListGroupItem>

export default StarLover
