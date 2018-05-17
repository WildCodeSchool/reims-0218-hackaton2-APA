import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

<<<<<<< HEAD
const ChoiceEye = ({ dropdownEyeOpen, toggleEyeFunction, changeEye }) => 
  <Dropdown 
    onSelect={ event => changeEye(event.target.innerText) }
    isOpen={dropdownEyeOpen} toggle={toggleEyeFunction}>
    <DropdownToggle caret color="primary">
      Eye Color
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Blue</DropdownItem>
      <DropdownItem>Red</DropdownItem>
      <DropdownItem>Green</DropdownItem>
      <DropdownItem>Black</DropdownItem>
      <DropdownItem>Yellow</DropdownItem>
    </DropdownMenu>
  </Dropdown>

export default ChoiceEye
=======
export class ChoiceEye extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {

    //this.props.changeEye(val)
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="danger">
          Eye Color
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Blue</DropdownItem>
          <DropdownItem>Red</DropdownItem>
          <DropdownItem>Green</DropdownItem>
          <DropdownItem>Black</DropdownItem>
          <DropdownItem>Yellow</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export class ChoiceSkin extends Component {
  constructor({ src }) {
    super( {src} );

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Skin Color
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Blue</DropdownItem>
          <DropdownItem>Red</DropdownItem>
          <DropdownItem>Green</DropdownItem>
          <DropdownItem>Black</DropdownItem>
          <DropdownItem>Yellow</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

>>>>>>> c37fc586dfef5e656f30c6d470fcfd0e8d9eba6f
