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
        <Button color="danger" onClick={this.toggle}>Nouvelle recherche</Button>
        <Modal className="text-center" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <p id="titlemodal" className="text-danger" size="lg">----WARNING----</p>
            <p id="imgmodal" className="text-danger"><img src={darkvador} alt="dk" style={{width: '250px', height: '250px'}}/></p>
            <p id="textmodal" className="text-danger" size="lg">JE SUIIIIS TON PERE</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Appeler la Résistance</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;