import React from 'react';
import forrest from "../images/forrest.gif";
import thomas from "../images/thomas.jpg";
import { Row, Col } from "reactstrap"

class ModalExample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    }); 
  }

  render() {
    return <div className="mt-5 container-fluid">
        <Row>
          <Col xs="6">
        <p className="text-center"><img src={forrest}  style={{width: '750px', height: '750px'}} alt="rez"/></p>
        
          </Col>
          <Col xs="6">
          <p className="text-center"><img src={thomas}  style={{width: '450px', height: '750px'}} alt="rez"/></p>
          </Col>
        </Row>
        <p size="5" className="text-center mt-3"> @TINGALACTIK ET MERCI THOMAS</p>
      </div>
    ;
  }
}

export default ModalExample2;