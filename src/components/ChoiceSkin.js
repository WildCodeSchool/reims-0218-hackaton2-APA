import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const ChoiceSkin = ({ dropdownSkinOpen, toggleSkinFunction, changeSkin }) => 
    <Dropdown 
        onSelect={ event => changeSkin(event.target.innerText) }
        isOpen={ dropdownSkinOpen} toggle={toggleSkinFunction}>
    <DropdownToggle caret color="primary">
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

export default ChoiceSkin