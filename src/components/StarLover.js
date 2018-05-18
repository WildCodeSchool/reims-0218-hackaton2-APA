import React from 'react'
import { ListGroupItem, ListGroup, Col, Row, Button } from 'reactstrap'

const StarLover = ({ selectedPeoples, increasing, decreasing, index }) => {
if (typeof(selectedPeoples[0]) !== 'undefined') {
return (
<ListGroup>
    <Row>
        <Col sm="10">
            <Row>
                <Col sm="1">
                    <Button onClick={increasing}>+</Button>
                </Col>
                <Col>
                    <ListGroupItem>{ selectedPeoples[index].name }</ListGroupItem>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 11, order: 2, offset: 1 }}>
                    <ListGroupItem>is a { selectedPeoples[index].gender }, { selectedPeoples[index].species }</ListGroupItem>
                </Col>
            </Row>
            <Row>
                <Col sm="1">
                    <Button onClick={decreasing}>-</Button>
                </Col>
                <Col>
                    <ListGroupItem>with { selectedPeoples[index].eyeColor } eyes</ListGroupItem>
                </Col>
            </Row>
        </Col>
        <Col sm="2">
            <img src={ selectedPeoples[index].image } alt={ selectedPeoples[0].name } />
        </Col>
    </Row>
</ListGroup>)
}
else {
return (
    <div>Vous êtes trop difficile à contenter</div>
)}
}
export default StarLover
