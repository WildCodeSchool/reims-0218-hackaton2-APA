import React, { Component } from "react";
import logostarwars from "./images/logostarwars.png"
import "./App.css";
import ChoiceGender from "./components/ChoiceGender";
import ChoiceSpecie from "./components/ChoiceSpecie";
import ListChoices from "./components/ListChoices";
import ChoiceEye from "./components/ChoiceEye";
import { Container, Button } from 'reactstrap'
import StarLover from "./components/StarLover";
import ModalExample from "./components/ModalLol";



class App extends Component {
  constructor() {
    super()
    this.state= {
      gender : '',
      species: '',
      eyeColor: '',
      peoples: [],
<<<<<<< HEAD
      selectedPeoples: []

=======
      selectedPeoples: [],
      count: 0
>>>>>>> a7afceb2d6e98e53c626dbdca4a1ea2ee7f16688
    }
    this.changeGender= this.changeGender.bind(this)
    this.changeSpecie= this.changeSpecie.bind(this)
    this.changeEye=this.changeEye.bind(this)
    this.filter=this.filter.bind(this)
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
  }

  componentDidMount() {
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    fetch(url)
    .then(res => res.json())
    .then(rest => this.setState({peoples: rest}))//stocker rest dans le state
  }

  filter() {
  //filtrer selon les critères
  this.setState(prevState => ({
    selectedPeoples: prevState.peoples
      .filter(people => this.state.gender === '' || people.gender === this.state.gender)
      .filter(people => this.state.species === '' || people.species === this.state.species)
      .filter(people => this.state.eyeColor === '' || people.eyeColor === this.state.eyeColor)
  }))
    
  }

  changeGender(gender) {
    this.setState ({
      gender: gender
    })
  }

  changeSpecie(species) {
    this.setState ({
      species: species
    })
  }

  changeEye(eyeColor) {
    this.setState ({
      eyeColor: eyeColor
    })
  }

  changeChoice(choice) {
    this.setState ({
      choice: choice
    })
  }

  increment() {
    //modifier le state
    console.log(this.state.selectedPeoples.length)
    console.log(this.state.count)
    if (this.state.count <this.state.selectedPeoples.length) {
      this.setState(
        prevState => ({count: prevState.count + 1})
      )}
  }

  decrement() {
    //modifier le state SI l'êtat est supérieur à 0
    if (this.state.count >0) {
    this.setState(
      prevState => ({count: prevState.count - 1})
    )}
  }  

  render() {
    return (
      <div className="App">
        <img src={logostarwars} alt="logostarwars" style={{width: '750px', height: '250px'}} />
        <Container className="py-3">
          <ChoiceGender change={this.changeGender} gender={this.state.gender}  />
          <ChoiceSpecie change={this.changeSpecie} species={this.state.species} />
          <ChoiceEye  change={this.changeEye} eyeColor={this.state.eyeColor}/>
          <ListChoices gender={this.state.gender} species={this.state.species} eye={this.state.eyeColor} skin={this.state.skinColor}/>
          <Button onClick={this.filter} >Valider</Button>
          <StarLover selectedPeoples={this.state.selectedPeoples} index={this.state.count} decreasing={this.decrement} increasing={this.increment}/>
        </Container>
        <ModalExample />
      </div>
    );
  }
}

export default App;

//name={this.state.name} gender={this.state.gender} species={this.state.species} eyeColor={this.state.eyeColor}