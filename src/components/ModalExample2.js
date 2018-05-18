import React from 'react';
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
      <div className="mt-5">
        <p className="text-center"><img src={forrest}  style={{width: '1250px', height: '750px'}} alt="rez"/></p>
      </div>
    );
  }
}

export default ModalExample2;