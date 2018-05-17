import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { Button } from 'reactstrap';
//import StarLover from './components/StarLover';
import ChoiceGender from "./components/ChoiceGender";
import ChoiceSpecie from "./components/ChoiceSpecie";
import Choice from "./components/Choice";
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
      lovers: []
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ChoiceGender change={this.changeGender} gender={this.state.gender}  />
        <ChoiceSpecie change={this.changeSpecie} specie={this.state.specie} />
        <ChoiceEye change={this.changeEye} eye={this.state.eye}/>
        <ChoiceSkin change={this.changeSkin} skin={this.state.skin}/>
        <ListChoices gender={this.state.gender} specie={this.state.specie} eye={this.state.eye} skin={this.state.skin}/>
        <Choice gender={this.state.gender}/>
      </div>
    );
  }
}

export default App;
