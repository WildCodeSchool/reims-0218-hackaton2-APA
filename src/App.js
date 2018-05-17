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
import {ChoiceEye, ChoiceSkin} from "./components/ChoiceEye";





class App extends Component {
  constructor() {
    super()
    this.state= {
      gender : '',
      specie: '',
      eye: '',
      skin:'',
      choice:[]
    }
    this.changeGender= this.changeGender.bind(this)
    this.changeSpecie= this.changeSpecie.bind(this)
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
       
        <ChoiceGender change={this.changeGender} gender={this.state.gender}  />
        <ChoiceSpecie change={this.changeSpecie} specie={this.state.specie} />
        <ChoiceEye change={this.changeEye} eye={this.state.eye}/>
        <ChoiceSkin change={this.changeSkin} skin={this.state.skin}/>
        <ListChoices gender={this.state.gender} specie={this.state.specie} eye={this.state.eye} skin={this.state.skin}/>
        <AllChoices change={this.changeChoice} choice={this.state.choice} gender={this.state.gender} specie={this.state.specie} eye={this.state.eye} skin={this.state.skin}/>
      </div>
    );
  }
}

export default App;
