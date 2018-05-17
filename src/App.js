import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import StarLover from './components/StarLover';
import ListStarLover from "./components/ListStarLover";
import ChoiceGender from "./components/ChoiceGender";
import {ChoiceEye, ChoiceSkin} from "./components/ChoiceColors";

class App extends Component {
  
  constructor () {
    super()
    this.state={
      choice: {
        gender: "female",
        eyeColor: "Red"
      },
      lovers: [
        {
          id: 0,
          name: "MONSIEUR TARTE",
          gender: "male",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue",
          skinColor: "light"
        },
        {
          id: 1,
          name: "MONSIEUR FISCHER",
          gender: "male",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue",
          skinColor: "light"
        },
        {
          id: 2,
          name: "MONSIEUR DESCHAMPS",
          gender: "male",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue",
          skinColor: "light"
        },
        {
          id: 3,
          name: "MONSIEUR LUKE",
          gender: "male",
          species: "human",
          hairColor: "blond",
          eyeColor: "blue",
          skinColor: "light"
        }
      ]

    }
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
        <ChoiceGender />
        <ListStarLover data={this.state.lovers}/>
        <ChoiceEye src={this.state.choice}/>
        <ChoiceSkin src={this.state.choice}/>
      </div>
    );
  }
}

export default App;
