import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import forrest from "../images/forrest.gif";

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
    return (
      <div>
        <Button color="danger" className="mb-5" onClick={this.toggle}>New search</Button>
        <Modal className="text-center" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <p id="imgmodal" className="text-danger"><img src={forrest} alt="dk" style={{width: '250px', height: '250px'}}/></p>
            <p id="textmodal" className="text-danger" size="lg">I AM YOUR FATHER SSHHHHHH</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Call Resistance</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample2;