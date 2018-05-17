import React, { Component } from "react";
import logo from "./logo.svg";
import logostarwars from "./images/logostarwars.png"
import "./App.css";
//import { Button } from 'reactstrap';
//import StarLover from './components/StarLover';
import ChoiceGender from "./components/ChoiceGender";
import ChoiceSpecie from "./components/ChoiceSpecie";
import AllChoices from "./components/AllChoices";
import ListChoices from "./components/ListChoices";
import ChoiceEye from "./components/ChoiceEye";
import ChoiceSkin from "./components/ChoiceSkin";
import { Container } from 'reactstrap'



class App extends Component {
  constructor() {
    super()
    this.state= {
      gender : '',
      specie: '',
      eyeColor: '',
      skinColor:'',
      dropDownEyeOpen:false,
      dropDownSkinOpen:false,
      choice:[]
    }
    this.changeGender= this.changeGender.bind(this)
    this.changeSpecie= this.changeSpecie.bind(this)
    this.changeEye=this.changeEye.bind(this)
    this.changeSkin=this.changeSkin.bind(this)
    this.toggleEye=this.toggleEye.bind(this)
    this.toggleSkin=this.toggleSkin.bind(this)
  }

  changeGender(gender) {
    this.setState ({
      gender: gender
    })
  }

  changeSpecie(specie) {
    this.setState ({
      specie: specie
    })
  }

  changeEye(eye) {
    this.setState ({
      eye: eye
    })
  }

  changeSkin(skin) {
    this.setState ({
      skin: skin
    })
  }

  toggleEye() {
    this.setState(prevState => ({
        dropdownEyeOpen: !prevState.dropdownEyeOpen
      }))
  }

  toggleSkin() {
    this.setState(prevState => ({
        dropdownSkinOpen: !prevState.dropdownSkinOpen
      }))
  }
  
  changeChoice(choice) {
    this.setState ({
      choice: choice
    })
  }

  render() {
    return (
      <div className="App">
       
        <img src={logostarwars} alt="logostarwars" style={{width: '750px', height: '250px'}} />
        <Container className="py-3">
          <ChoiceGender change={this.changeGender} gender={this.state.gender}  />
          <ChoiceSpecie change={this.changeSpecie} specie={this.state.specie} />
          <ChoiceEye dropdownEyeOpen={this.state.dropDownEyeOpen} toggleEyeFunction={this.toggleEye} changeEye={this.changeEye}/>
          <ChoiceSkin dropdownSkinOpen={this.state.dropDownSkinOpen} toggleSkinFunction={this.toggleSkin} changeSkin={this.changeSkin}/>
          <ListChoices gender={this.state.gender} specie={this.state.specie} eye={this.state.eyeColor} skin={this.state.skinColor}/>
          <AllChoices change={this.changeChoice} choice={this.state.choice} gender={this.state.gender} specie={this.state.specie} eye={this.state.eyeColor} skin={this.state.skinColor}/>
        </Container>
      </div>
    );
  }
}

export default App;
