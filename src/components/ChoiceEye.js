import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
