import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const ListChoices = ({gender, species, skin, eye }) => 
    <Row className="mb-2 mt-2 justify-content-center listchoices">
      <Col sm="6">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle className="taliste">Your list of criterion: </CardTitle>
          <CardText>Preferred gender: {gender} <br/>
                    Species according: {species} <br/>
                    Their eye color: {eye} <br/>
          </CardText>

        </Card>
      </Col>
    </Row>


export default ListChoices;