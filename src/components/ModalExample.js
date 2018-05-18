import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import darkvador from "../images/darkvador.jpg";

class ModalExample extends React.Component {
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
        <Modal className="text-center App-logo" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <p id="titlemodal" className="text-danger" size="lg">----WARNING----</p>
            <p id="imgmodal" className="text-danger"><img src={darkvador} alt="dk" style={{width: '250px', height: '250px'}}/></p>
            <p id="textmodal" className="text-danger" size="lg">I AM YOUR FATHER SSHHHHHH</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.next}>Call Resistance</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;