import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
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

