import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const ListChoices = ({gender, species, skin, eye }) => 
    <Row className="mb-2 mt-2 justify-content-center">
      <Col sm="6">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Ta liste de critères: </CardTitle>
          <CardText>{gender} <br/>
                    {species} <br/>
                    {eye} <br/>
                    {skin} <br/>
          </CardText>

        </Card>
      </Col>
    </Row>


export default ListChoices;