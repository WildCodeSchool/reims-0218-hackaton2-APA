import React,{Component} from 'react'

class ChoiceSpecie extends Component {
  constructor() {
    super()
    this.state= {
      type : ''
    }
  }

  displayHuman(){
    console.log('human')
    //modifier le state
    this.setState(
      { specie : this.state.type}
    )
  }
  displayDroid(){
    console.log('droid')
      //modifier le state
      this.setState(
      { type : this.state.type}
    )
    
  }

  render(){
      return(
        <div>
          <p>Specie :{this.state.type}</p>
          <button onClick={ () => this.setState({
            type : " Human"
          })}
            >Human</button>
          <button onClick={ () => this.setState({
            type : " Droid"
          })}
          >Droid</button>
          </div>
      );
  }

}
export default ChoiceSpecie;