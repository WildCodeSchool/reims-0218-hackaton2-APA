import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import StarLover from './components/StarLover';
import ChoiceGender from "./components/ChoiceGender";
import ChoiceSpecie from "./components/ChoiceSpecie";
import StarWarsApi from "./components/Article";
import ListChoices from "./components/ListChoices";
import {ChoiceEye, ChoiceSkin} from "./components/ChoiceColors";





class App extends Component {
  constructor() {
    super()
    this.state= {
      gender : '',
      specie: '',
      eyeColor: '',
      skinColor:''
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
        <ListChoices />
        <StarWarsApi />
        <ChoiceGender change={this.changeGender} gender={this.state.gender}  />
        <ChoiceSpecie change={this.changeSpecie} specie={this.state.specie} />
        <ChoiceEye change={this.changeEye} eye={this.state.eye}/>
        <ChoiceSkin change={this.changeSkin} skin={this.state.skin}/>
      </div>
    );
  }
}

export default App;
