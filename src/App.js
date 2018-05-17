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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={logostarwars} alt="logostarwars" style={{width: '750px', height: '250px'}} />
        <Container className="py-3">
          <ChoiceGender change={this.changeGender} gender={this.state.gender}  />
          <ChoiceSpecie change={this.changeSpecie} specie={this.state.specie} />
          <ChoiceEye change={this.changeEye} eye={this.state.eye}/>
          <ChoiceSkin change={this.changeSkin} skin={this.state.skin}/>
          <ListChoices gender={this.state.gender} specie={this.state.specie} eye={this.state.eye} skin={this.state.skin}/>
          <AllChoices change={this.changeChoice} choice={this.state.choice} gender={this.state.gender} specie={this.state.specie} eye={this.state.eye} skin={this.state.skin}/>
        </Container>
      </div>
    );
  }
}

export default App;
