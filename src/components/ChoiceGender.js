import React,{Component} from 'react'

class ChoiceGender extends Component {
  constructor() {
    super()
    this.state= {
      type : ''
    }
  }

  displayMale(){
    console.log('male')
    //modifier le state
    this.setState(
      { type : this.state.type}
    )
  }
  displayFemale(){
    console.log('female')
      //modifier le state
      this.setState(
      { type : this.state.type}
    )
    
  }

  render(){
      return(
        <div>
          <p>Gender :{this.state.type}</p>
          <button onClick={ () => this.setState({
            type : "Male"
          })}
            >Male</button>
          <button onClick={ () => this.setState({
            type : "Female"
          })}
          >Female</button>
          </div>
      );
  }

}
export default ChoiceGender;