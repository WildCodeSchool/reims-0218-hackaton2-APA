import React from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'

const StarLover = ({ selectedPeoples}) => {
if (typeof(selectedPeoples[0]) !== 'undefined') {
return (
<ListGroup>
    <ListGroupItem>{ selectedPeoples[0].name }</ListGroupItem>
    <ListGroupItem>is a { selectedPeoples[0].gender }</ListGroupItem>
    <ListGroupItem>is a { selectedPeoples[0].species }</ListGroupItem>
    <ListGroupItem>with { selectedPeoples[0].eyeColor } eyes</ListGroupItem>
</ListGroup>)
}
else {
return (
    <div>Vous êtes trop difficile à contenter</div>
)
}
}
export default StarLover
