import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ListChoices = ({gender, specie, skin, eye }) => <div>ListChoices {gender} {specie} {skin} {eye}
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Ton amour intergalactique sera: </CardTitle>
          <CardText>{gender} <br/>
                    {specie} <br/>
                    {eye} <br/>
                    {skin} <br/>
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>

</div>
export default ListChoices;