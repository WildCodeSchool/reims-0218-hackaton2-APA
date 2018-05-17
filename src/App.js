import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import StarLover from './components/StarLover';
import ListStarLover from "./components/ListStarLover";

const data = [
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
];

class App extends Component {
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
        <ListStarLover data={data}/>
      </div>
    );
  }
}

export default App;
